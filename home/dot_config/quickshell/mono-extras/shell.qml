//@ pragma DefaultEnv QS_NO_RELOAD_POPUP=1

import QtQuick
import Quickshell
import Quickshell.Hyprland
import Quickshell.Io
import Quickshell.Services.Mpris
import Quickshell.Wayland
import "."

ShellRoot {
    id: root

    property string page: ""
    property var panelScreen: null
    property string preferredOutput: ""
    readonly property var centerScreen: Quickshell.screens.find(screen => screen.name === preferredOutput)
        || Quickshell.screens[0] || null
    readonly property var widgetScreen: Quickshell.screens.find(screen => screen.name !== centerScreen?.name)
        || centerScreen
    readonly property string home: Quickshell.env("HOME")
    readonly property string backend: home + "/.local/bin/caelestia-extras"
    readonly property string statePath: home + "/.local/state/mono-extras/"
    property var report: ({})
    property var updateList: []
    property bool checkedUpdates: false
    property var wallpaperList: ({items: [], selections: {}, outputs: []})
    property var bindings: []
    property var clipboardEntries: []
    property var audioData: ({outputs: [], apps: []})
    property var processList: ({cpu: [], memory: []})
    property var captureList: []
    property var alertRules: []
    property string recentCapture: ""
    property string notice: ""
    property string note: ""
    property var taskList: []
    property var favoriteWallpapers: []
    property bool cornerEnabled: false
    property real deadline: 0
    property real stopwatchStart: 0
    property int stopwatchElapsed: 0
    property int seconds: 0
    property bool showTrack: false
    readonly property var player: Mpris.players.values.find(player => player.playbackState === MprisPlaybackState.Playing)
        || Mpris.players.values.find(player => player.trackTitle) || null
    readonly property string track: player?.trackTitle || ""
    readonly property var tabs: [
        {id: "controls", title: "Controls"}, {id: "displays", title: "Displays"},
        {id: "wallpapers", title: "Wallpapers"}, {id: "shortcuts", title: "Shortcuts"},
        {id: "clipboard", title: "Clipboard"}, {id: "focus", title: "Focus"},
        {id: "audio", title: "Audio"}, {id: "captures", title: "Captures"}, {id: "alerts", title: "Alerts"}
    ]

    function open(destination) {
        if (destination !== "overview" && !tabs.some(tab => tab.id === destination))
            return;
        if (!page) {
            panelScreen = Quickshell.screens.find(screen => screen.name === Hyprland.focusedMonitor?.name)
                || centerScreen;
        }
        notice = "";
        page = destination;
        refresh(destination);
    }

    function launch(command) {
        page = "";
        Quickshell.execDetached(command);
    }

    function refresh(destination) {
        if (destination === "controls" || destination === "displays") statusProcess.running = true;
        if (destination === "wallpapers") wallpaperProcess.running = true;
        if (destination === "shortcuts") bindsProcess.running = true;
        if (destination === "clipboard") clipboardProcess.running = true;
        if (destination === "audio") audioProcess.running = true;
        if (destination === "captures") capturesProcess.running = true;
        if (destination === "alerts") alertProcess.running = true;
        if (destination === "controls") processQuery.running = true;
        if (destination === "overview") {
            Hyprland.refreshWorkspaces();
            Hyprland.refreshToplevels();
        }
    }

    function action(args) {
        if (actionProcess.running)
            return;
        if (args[0] === "displays") panelScreen = centerScreen;
        notice = "";
        actionProcess.command = [backend].concat(args);
        actionProcess.running = true;
    }

    function wall(output, path) {
        action(["wallpaper", output, path]);
    }

    function readJson(content, store) {
        if (!content.trim()) return;
        try { store(JSON.parse(content)); }
        catch (error) { console.warn("Invalid desktop data:", error); }
    }

    function persist() {
        stateFile.setText(JSON.stringify({note: note, tasks: taskList, deadline: deadline,
            stopwatchStart: stopwatchStart, stopwatchElapsed: stopwatchElapsed, favorites: favoriteWallpapers,
            corner: cornerEnabled}));
    }

    function toggleFavorite(path) {
        favoriteWallpapers = favoriteWallpapers.includes(path)
            ? favoriteWallpapers.filter(item => item !== path) : favoriteWallpapers.concat([path]);
        persist();
    }

    function addTask(label) {
        const value = label.trim();
        if (!value) return;
        taskList = taskList.concat([{text: value, done: false}]);
        persist();
    }

    function editTask(index, remove) {
        if (remove)
            taskList = taskList.filter((task, i) => i !== index);
        else
            taskList = taskList.map((task, i) => i === index ? {text: task.text, done: !task.done} : task);
        persist();
    }

    function startTimer(minutes) {
        if (!Number.isFinite(minutes) || minutes < 1 || minutes > 240) {
            notice = "Enter a duration from 1 to 240 minutes.";
            return;
        }
        deadline = Date.now() + Math.round(minutes * 60000);
        tick();
        persist();
    }

    function tick() {
        if (!deadline) {
            seconds = 0;
            return;
        }
        seconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
        if (seconds === 0) {
            deadline = 0;
            persist();
            Quickshell.execDetached(["notify-send", "-a", "Caelestia", "Focus timer complete"]);
        }
    }

    function cancelTimer() {
        deadline = 0;
        tick();
        persist();
    }

    function timeText(value) {
        return String(Math.floor(value / 60)).padStart(2, "0") + ":" + String(value % 60).padStart(2, "0");
    }

    function windowAddress(toplevel) {
        const value = String(toplevel?.address || "");
        return /^(0x)?[0-9a-f]+$/i.test(value) ? "0x" + value.replace(/^0x/, "") : "";
    }

    function activate(toplevel) {
        const address = windowAddress(toplevel);
        if (!address) return;
        pendingFocus.expression = 'hl.dsp.focus({window="address:' + address + '"})';
        page = "";
        pendingFocus.restart();
    }

    function workspaceArg(workspace) {
        if (workspace.id > 0) return String(workspace.id);
        return /^[A-Za-z0-9_-]+$/.test(workspace.name) ? '"name:' + workspace.name + '"' : "";
    }

    function focusWorkspace(workspace) {
        const target = workspaceArg(workspace);
        if (!target) return;
        pendingFocus.expression = "hl.dsp.focus({workspace=" + target + "})";
        page = "";
        pendingFocus.restart();
    }

    function moveWindow(toplevel, workspace) {
        const address = windowAddress(toplevel);
        const destination = workspaceArg(workspace);
        if (address && destination)
            Hyprland.dispatch('hl.dsp.window.move({window="address:' + address + '",workspace=' + destination + ',follow=false})');
    }

    IpcHandler {
        target: "desktop"
        function open(page: string): void { root.open(page); }
        function toggle(page: string): void { if (root.page === page) root.page = ""; else root.open(page); }
        function close(): void { root.page = ""; }
        function startTimer(minutes: int): void { root.startTimer(minutes); }
        function stopTimer(): void { root.cancelTimer(); }
        function refreshStatus(): void { statusProcess.running = true; }
        function showCapture(path: string): void {
            if (!path.startsWith(root.home + "/Pictures/Screenshots/") || !path.endsWith(".png")) return;
            root.recentCapture = path;
            captureTimeout.restart();
        }
        function status(): string {
            return JSON.stringify({page: root.page, screen: root.panelScreen?.name, seconds: root.seconds,
                wallpapers: root.wallpaperList.items.length, bindings: root.bindings.length,
                monitors: root.report.outputs?.length || 0, checkedUpdates: root.checkedUpdates,
                audioOutputs: root.audioData.outputs.length, dockOpen: appDock.revealed});
        }
    }

    FileView {
        path: root.home + "/.config/cachyos-amethyst/machine.json"
        printErrors: false
        onLoaded: root.readJson(text(), data => root.preferredOutput = data.preferred_output || "")
    }

    FileView {
        id: stateFile
        path: root.statePath + "desktop.json"
        printErrors: false
        onLoaded: root.readJson(text(), data => {
            root.note = data.note || "";
            root.taskList = data.tasks || [];
            root.favoriteWallpapers = data.favorites || [];
            root.cornerEnabled = data.corner === true;
            root.deadline = data.deadline || 0;
            root.stopwatchStart = data.stopwatchStart || 0;
            root.stopwatchElapsed = data.stopwatchElapsed || 0;
            root.tick();
        })
    }

    onTrackChanged: if (track) { showTrack = true; mediaTimeout.restart(); }
    Timer { id: mediaTimeout; interval: 6500; onTriggered: root.showTrack = false }
    Timer { id: captureTimeout; interval: 7500; onTriggered: root.recentCapture = "" }
    Timer { interval: 1000; repeat: true; running: root.deadline > 0; onTriggered: root.tick() }
    Timer {
        id: pendingFocus
        interval: 40
        property string expression: ""
        onTriggered: Hyprland.dispatch(expression)
    }
    Timer { running: root.page === "controls" || root.page === "displays"; interval: 10000;
        repeat: true; onTriggered: root.refresh(root.page) }
    Timer { running: true; repeat: true; interval: 1800000; triggeredOnStart: true;
        onTriggered: updatesProcess.running = true }
    Timer { running: true; repeat: true; interval: 60000; triggeredOnStart: true;
        onTriggered: statusProcess.running = true }

    Process { id: statusProcess; command: [root.backend, "status"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.report = value) } }
    Process { id: updatesProcess; command: [root.backend, "updates"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => {
            root.updateList = value; root.checkedUpdates = true;
        }) } }
    Process { id: wallpaperProcess; command: [root.backend, "wallpapers"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.wallpaperList = value) } }
    Process { id: bindsProcess; command: [root.backend, "shortcuts"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.bindings = value) } }
    Process { id: clipboardProcess; command: [root.backend, "clipboard"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.clipboardEntries = value) } }
    Process { id: audioProcess; command: [root.backend, "audio"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.audioData = value) } }
    Process { id: processQuery; command: [root.backend, "processes"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.processList = value) } }
    Process { id: capturesProcess; command: [root.backend, "captures"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.captureList = value) } }
    Process { id: alertProcess; command: [root.backend, "notifications"]
        stdout: StdioCollector { onStreamFinished: root.readJson(text, value => root.alertRules = value) } }
    Process {
        id: actionProcess
        stderr: StdioCollector { id: actionError }
        onExited: (code, exitStatus) => {
            if (code === 0) {
                const messages = {wallpaper: "Wallpaper applied.", copy: "Copied to clipboard.",
                    "clipboard-text": "Copied to clipboard.", route: "Audio output changed.",
                    displays: "Display power updated.", power: "Power profile updated.",
                    notification: "Notification rule saved.", "copy-capture": "Screenshot copied.",
                    brightness: "Display brightness updated."};
                root.notice = messages[command[1]] || "";
                root.refresh(root.page);
            } else {
                root.notice = actionError.text.trim().split("\n")[0].slice(0, 150) || "The action failed.";
            }
        }
    }

    LazyLoader {
        active: root.page !== "" && root.page !== "overview"
        ControlCenter { session: root }
    }
    LazyLoader {
        active: root.page === "overview"
        WorkspaceOverview { session: root }
    }
    DesktopDock { id: appDock; session: root }
    DesktopWidgets { session: root }
    StatusPill { session: root }
    LazyLoader {
        active: root.recentCapture !== "" && root.page === ""
        CapturePreview { session: root }
    }
    LazyLoader {
        active: root.cornerEnabled && !root.page
            && !Hyprland.monitors.values.find(monitor => monitor.name === root.centerScreen?.name)?.activeWorkspace?.hasFullscreen
        PanelWindow {
            screen: root.centerScreen
            anchors { top: true; left: true }
            implicitWidth: 8
            implicitHeight: 8
            color: "transparent"
            exclusionMode: ExclusionMode.Ignore
            WlrLayershell.namespace: "mono-overview-corner"
            WlrLayershell.layer: WlrLayer.Top
            WlrLayershell.keyboardFocus: WlrKeyboardFocus.None
            HoverHandler { id: cornerPointer }
            Timer {
                interval: 500
                running: cornerPointer.hovered
                onTriggered: root.open("overview")
            }
        }
    }
}
