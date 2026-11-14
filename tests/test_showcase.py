"""Publication and process-ownership boundaries; no real desktop capture."""
import argparse
import fcntl
from importlib.machinery import SourceFileLoader
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT=Path(__file__).resolve().parents[1]
def module(name,path):
    loader=SourceFileLoader(name,str(path));spec=importlib.util.spec_from_loader(name,loader);m=importlib.util.module_from_spec(spec);loader.exec_module(m);return m

class ShowcaseBoundaries(unittest.TestCase):
    def test_second_capture_refused_before_desktop_access(self):
        m=module('capture_lock',ROOT/'tools/showcase')
        with tempfile.TemporaryDirectory() as tmp:
            m.PRIVATE=Path(tmp)
            with (Path(tmp)/'.capture.lock').open('a+') as lock:
                fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
                with self.assertRaisesRegex(SystemExit,'active'):m.record('lock-check','nonexistent-output',1)

    def test_interrupted_source_cannot_be_encoded(self):
        m=module('interrupted_capture',ROOT/'tools/showcase')
        with tempfile.TemporaryDirectory() as tmp:
            m.PRIVATE=Path(tmp);p=Path(tmp)/'rehearsal';p.mkdir();(p/'source.json').write_text(json.dumps({'interrupted':True}))
            with self.assertRaisesRegex(SystemExit,'interrupted'):m.encode(argparse.Namespace(privacy_reviewed=True,scene='rehearsal'))

    def test_failed_workflow_cannot_be_encoded(self):
        m=module('failed_capture',ROOT/'tools/showcase')
        with tempfile.TemporaryDirectory() as tmp:
            m.PRIVATE=Path(tmp);p=Path(tmp)/'rehearsal';p.mkdir();(p/'source.json').write_text('{}');(p/'workflow.json').write_text('{"status":"FAIL"}')
            with self.assertRaisesRegex(SystemExit,'did not complete'):m.encode(argparse.Namespace(privacy_reviewed=True,scene='rehearsal'))

    def test_site_manifest_cannot_export_private_paths(self):
        m=module('gallery_boundary',ROOT/'showcase/revision-2/build-site.py')
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);m.ROOT=root;(root/'site').mkdir();(root/'showcase/revision-2').mkdir(parents=True)
            (root/'showcase/revision-2/CREDITS.md').write_text('Test credits')
            for name in ['index.html','style.css','app.js']:(root/'site'/name).write_text('test fixture')
            (root/'showcase/revision-2/media.json').write_text(json.dumps({'assets':[{'path':'../private-recording.mp4'}]}))
            with self.assertRaisesRegex(SystemExit,'escapes'):m.build(root/'.build/site')
            self.assertFalse((root/'.build/site').exists())

    def test_asset_directory_cannot_redirect_to_private_capture(self):
        m=module('gallery_symlink_boundary',ROOT/'showcase/revision-2/build-site.py')
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);m.ROOT=root;(root/'site').mkdir();public=root/'showcase/revision-2';public.mkdir(parents=True)
            for name in ['index.html','style.css','app.js']:(root/'site'/name).write_text('Test site')
            (public/'CREDITS.md').write_text('Test credits')
            private=root/'private-captures';private.mkdir();(private/'source.mp4').write_bytes(b'private take')
            (public/'assets').symlink_to(private,target_is_directory=True)
            (public/'media.json').write_text(json.dumps({'assets':[{'path':'showcase/revision-2/assets/source.mp4'}]}))
            with self.assertRaisesRegex(SystemExit,'ancestor'):m.build(root/'.build/site')
            self.assertFalse((root/'.build/site').exists())

if __name__=='__main__':unittest.main()
