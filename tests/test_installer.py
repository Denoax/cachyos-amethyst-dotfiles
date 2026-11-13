"""Filesystem contracts against disposable homes, using the real chezmoi renderer."""
import contextlib
import importlib.util
import io
import json
import os
from pathlib import Path
import shutil
import subprocess
import tempfile
import unittest
from unittest.mock import patch

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('installer',ROOT/'installer/install.py')
m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)

class InstallerTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory(prefix='amethyst home Ω ')
        self.home=Path(self.tmp.name)
        self.env=patch.dict(os.environ,{'HOME':str(self.home),'XDG_CONFIG_HOME':str(self.home/'.config'),'XDG_DATA_HOME':str(self.home/'.local/share'),'XDG_STATE_HOME':str(self.home/'.local/state')})
        self.env.start()
        self.cm=os.environ.get('CHEZMOI',shutil.which('chezmoi'))
        if not self.cm:self.skipTest('real chezmoi required')
    def tearDown(self):
        self.env.stop();self.tmp.cleanup()
    def cli(self,*args):
        with contextlib.redirect_stdout(io.StringIO()):
            return m.main([*args,'--with','','--config-only','--chezmoi',self.cm])
    def manifest(self):return json.loads((m.state_root(self.home)/'current.json').read_text())
    def rollback(self):
        tx=self.manifest()['transaction'];self.cli('rollback','--transaction',tx)
    def tree(self):
        return {str(p.relative_to(self.home)):(p.lstat().st_mode,os.readlink(p) if p.is_symlink() else p.read_bytes() if p.is_file() else None) for p in self.home.rglob('*')}
    def test_plan_and_dry_run_write_nothing(self):
        self.cli('plan');self.assertEqual(self.tree(),{})
        self.cli('apply','--dry-run');self.assertEqual(self.tree(),{})
    def test_fresh_repeat_verify_and_rollback(self):
        self.cli('apply');self.cli('verify');first=self.manifest();post={p:(self.home/p).read_bytes() for p in first['files']}
        self.cli('apply');self.assertEqual(self.manifest(),first)
        self.assertEqual(post,{p:(self.home/p).read_bytes() for p in post})
        self.rollback();self.assertFalse((self.home/'.config/hypr/hyprland.lua').exists())
    def test_existing_mode_symlink_and_unrelated_files(self):
        p=self.home/'.config/hypr/hyprland.lua';p.parent.mkdir(parents=True);p.write_text('original');p.chmod(0o640)
        unowned=p.parent/'unrelated.lua';unowned.write_text('keep')
        link=self.home/'.config/kitty/kitty.conf';link.parent.mkdir(parents=True);target=self.home/'my-kitty';target.write_text('kitty original');link.symlink_to(target)
        self.cli('apply','--migrate-ownership','.config/kitty/kitty.conf');self.rollback()
        self.assertEqual(p.read_text(),'original');self.assertEqual(p.stat().st_mode&0o777,0o640)
        self.assertTrue(link.is_symlink());self.assertEqual(target.read_text(),'kitty original');self.assertEqual(unowned.read_text(),'keep')
    def test_postapply_user_edit_blocks_entire_rollback(self):
        self.cli('apply');p=self.home/'.config/hypr/hyprland.lua';p.write_text('new user edit');before=self.tree()
        with self.assertRaisesRegex(m.Error,'newer edits'):self.rollback()
        self.assertEqual(self.tree(),before)
    def test_symlink_escape_and_directory_collision(self):
        (self.home/'.config').symlink_to('/tmp')
        with self.assertRaisesRegex(m.Error,'Symlink parent'):self.cli('plan')
        (self.home/'.config').unlink();(self.home/'.config/hypr/hyprland.lua').mkdir(parents=True)
        with self.assertRaisesRegex(m.Error,'Directory/file'):self.cli('apply')
    def test_existing_personal_manager_preserved(self):
        src=self.home/'.local/share/chezmoi/dot_config/hypr/hyprland.lua';src.parent.mkdir(parents=True);src.write_text('my personal source')
        with self.assertRaisesRegex(m.Error,'Explicitly migrate'):self.cli('apply')
        self.cli('apply','--migrate-ownership','.config/hypr/hyprland.lua')
        self.assertEqual(src.read_text(),'my personal source');self.assertFalse((self.home/'.config/chezmoi').exists())
    def test_missing_renderer_no_target_writes(self):
        with self.assertRaisesRegex(m.Error,'chezmoi is missing'):m.main(['apply','--with','','--config-only','--chezmoi','amethyst-missing-tool'])
        self.assertEqual(self.tree(),{})
    def test_render_failure_leaves_targets_untouched(self):
        with patch.object(m,'cm_render',side_effect=m.Error('failing template')):
            with self.assertRaisesRegex(m.Error,'failing template'):self.cli('apply')
        self.assertFalse((self.home/'.config/hypr/hyprland.lua').exists())
    def test_interrupted_file_phase_restores_preimages(self):
        p=self.home/'.config/hypr/hyprland.lua';p.parent.mkdir(parents=True);p.write_text('keep original')
        real=m.atomic;counter=0
        def fail_once(path,data,mode):
            nonlocal counter
            if path.is_relative_to(self.home) and '/transactions/' not in str(path) and path!=m.state_root(self.home)/'current.json':
                counter+=1
                if counter==3:raise InterruptedError('injected interrupted file phase')
            return real(path,data,mode)
        with patch.object(m,'atomic',side_effect=fail_once):
            with self.assertRaisesRegex(InterruptedError,'injected'):self.cli('apply')
        self.assertEqual(p.read_text(),'keep original');self.assertFalse((self.home/'.local/bin/caelestia-workspace').exists())
    def test_fixture_migration_rolls_back_to_old_owned_file(self):
        self.cli('apply');p=self.home/'.config/hypr/hyprland.lua';p.write_text('-- controlled older fixture\n')
        # Representative user-edited file is unrelated and must survive the migration.
        other=self.home/'.config/fixture-user-settings';other.write_text('user edited')
        self.cli('apply');self.rollback();self.assertEqual(p.read_text(),'-- controlled older fixture\n');self.assertEqual(other.read_text(),'user edited')
    def test_traversal_and_root_rejected(self):
        with self.assertRaises(m.Error):m.safe(self.home,'../escape')
        with patch.object(os,'geteuid',return_value=0):
            with self.assertRaisesRegex(m.Error,'ordinary target user'):self.cli('apply')
    def test_allowlisted_empty_file_is_created_and_removed_on_rollback(self):
        source=self.home/'empty-source';source.write_bytes(b'')
        with patch.object(m,'source_files',return_value={'.config/amethyst-empty':source}):
            self.cli('apply')
        target=self.home/'.config/amethyst-empty'
        self.assertTrue(target.is_file());self.assertEqual(target.read_bytes(),b'')
        self.rollback();self.assertFalse(target.exists());self.assertTrue(source.is_file())
    def test_package_failure_precedes_any_file_transaction(self):
        with patch.object(m,'install_packages',side_effect=m.Error('package stage failed')):
            with self.assertRaisesRegex(m.Error,'package stage failed'):
                with contextlib.redirect_stdout(io.StringIO()):
                    m.main(['apply','--with','','--install-packages','--chezmoi',self.cm])
        self.assertEqual(self.tree(),{})
    def test_config_only_cannot_request_package_installation(self):
        with self.assertRaisesRegex(m.Error,'cannot be combined'):
            self.cli('apply','--install-packages')
        self.assertEqual(self.tree(),{})

if __name__=='__main__':unittest.main()
