// Local window picker. Reference: installed Caelestia AppItem.qml/StyledText.qml
// and Quickshell's documented PanelWindow, HyprlandToplevel and ScreencopyView.
// Uses existing icons/fonts and the active Caelestia palette; no generated assets.
import QtQuick
import Quickshell
import Quickshell.Io
import Quickshell.Hyprland
import Quickshell.Wayland
import Quickshell.Widgets

ShellRoot {
    id: root
    property bool opened: false
    property var windows: []
    property int selected: 0
    property var targetScreen: null
    property var palette: ({})
    property string pendingAddress: ""
    function entry(t) { return DesktopEntries.heuristicLookup(t?.lastIpcObject.class || ""); }
    function appName(t) {
        const cls = t?.lastIpcObject.class || "";
        return entry(t)?.name || (/^(FixVisual|MonoArch|kitty)/.test(cls) ? "Terminal" : cls);
    }
    function icon(t) {
        return Quickshell.iconPath(entry(t)?.icon || (/^(FixVisual|MonoArch|kitty)/.test(t?.lastIpcObject.class || "") ? "utilities-terminal" : "application-x-executable"), "application-x-executable");
    }
    function colour(name, fallback) { return "#" + (palette[name] || fallback); }
    function eligible(t) {
        return t && t.address && t.lastIpcObject.mapped && !t.lastIpcObject.hidden
            && t.workspace && !t.workspace.name.startsWith("special:");
    }
    property bool waiting: false
    property bool acceptWhenReady: false
    property int openingDirection: 1
    property int readinessChecks: 0
    property string openingScreen: ""
    property bool monitorReady: false
    function step(direction) {
        if (waiting) { openingDirection += direction; return; }
        if (!opened) {
            waiting = true; acceptWhenReady = false;
            openingDirection = direction; readinessChecks = 0;
            openingScreen = ""; monitorReady = false;
            Hyprland.refreshToplevels();
            monitorQuery.running = true;
            openingTimer.start();
        } else {
            selected = (selected + direction + windows.length) % windows.length;
        }
    }
    function prepare() {
        windows = Hyprland.toplevels.values.filter(eligible).sort((a,b) =>
            (a.lastIpcObject.focusHistoryID ?? 9999) - (b.lastIpcObject.focusHistoryID ?? 9999));
        waiting = false;
        if (!windows.length) return;
        targetScreen = Quickshell.screens.find(s => s.name === (openingScreen || Hyprland.focusedMonitor?.name))
            || Quickshell.screens[0];
        const active = windows.findIndex(t => t === Hyprland.activeToplevel);
        selected = ((active < 0 ? 0 : active) + openingDirection % windows.length + windows.length) % windows.length;
        opened = true;
        if (acceptWhenReady) accept();
    }
    function cancel() { waiting = false; openingTimer.stop(); opened = false; windows = []; }
    function accept() {
        if (waiting) { acceptWhenReady = true; return; }
        if (!opened) return;
        const t = windows[selected];
        pendingAddress = eligible(t) ? t.address : "";
        cancel();
        // Focus only after the exclusive layer has released keyboard focus.
        if (pendingAddress) focusTimer.restart();
    }
    Timer {
        id: openingTimer
        interval: 20; repeat: true
        onTriggered: {
            // Newly mapped windows have no lastIpcObject until the asynchronous refresh.
            // Bound this readiness check to 500 ms; it runs only while opening.
            if ((!root.monitorReady || Hyprland.toplevels.values.some(t => t.lastIpcObject.mapped === undefined))
                    && ++root.readinessChecks < 25) return;
            stop(); root.prepare();
        }
    }
    Process {
        id: monitorQuery
        command: ["hyprctl", "-j", "monitors"]
        stdout: StdioCollector {
            onStreamFinished: {
                if (!root.waiting) return;
                try { root.openingScreen = JSON.parse(text).find(m => m.focused)?.name || ""; }
                catch (e) { root.openingScreen = ""; }
                root.monitorReady = true;
            }
        }
    }
    Timer {
        id: focusTimer
        interval: 35
        onTriggered: {
            const address = root.pendingAddress;
            root.pendingAddress = "";
            if (/^(0x)?[0-9a-f]+$/i.test(address)
                    && Hyprland.toplevels.values.some(t => t.address === address))
                Hyprland.dispatch('hl.dsp.focus({window="address:' + (address.startsWith("0x") ? address : "0x" + address) + '"})');
        }
    }
    FileView {
        path: Quickshell.env("HOME") + "/.local/share/caelestia-monochrome/palette.json"
        watchChanges: true
        onFileChanged: reload()
        onLoaded: root.palette = JSON.parse(text()).colours
    }
    Connections {
        target: Hyprland
        function onRawEvent(event) {
            if (root.opened && (event.name === "closewindow" || event.name === "lockgroups"))
                root.cancel();
        }
    }
    IpcHandler {
        target: "switcher"
        function next(): void { root.step(1); }
        function previous(): void { root.step(-1); }
        function accept(): void { root.accept(); }
        function cancel(): void { root.cancel(); }
        function status(): string {
            return JSON.stringify({open:root.opened, waiting:root.waiting, count:root.windows.length,
                selected:root.selected, address:root.windows[root.selected] ? "0x" + root.windows[root.selected].address.replace(/^0x/, "") : "",
                screen:root.targetScreen?.name || ""});
        }
    }
    LazyLoader {
        active: root.opened
        PanelWindow {
            id: panel
            screen: root.targetScreen
            readonly property int columns: Math.max(1, Math.min(3, root.windows.length, Math.floor(((screen?.width || 1920) - 128) / 328)))
            implicitWidth: columns * 328 + 40
            implicitHeight: Math.min((screen?.height || 1080) - 160, Math.ceil(root.windows.length / columns) * 260 + 106)
            exclusionMode: ExclusionMode.Ignore
            color: "transparent"
            WlrLayershell.namespace: "mono-window-switcher"
            WlrLayershell.layer: WlrLayer.Overlay
            WlrLayershell.keyboardFocus: WlrKeyboardFocus.Exclusive
            HyprlandFocusGrab {
                active: root.opened
                windows: [panel]
                onCleared: root.cancel()
            }
            Rectangle {
                anchors.fill: parent
                radius: 32
                color: root.colour("surfaceContainerLow", "121212")
                border.color: root.colour("outlineVariant", "383838")
                border.width: 1
                focus: true
                Keys.onPressed: event => {
                    if (event.key === Qt.Key_Escape) root.cancel();
                    else if (event.key === Qt.Key_Return || event.key === Qt.Key_Enter) root.accept();
                    else if (event.key === Qt.Key_Left || event.key === Qt.Key_Backtab) root.step(-1);
                    else if (event.key === Qt.Key_Up) root.step(-panel.columns);
                    else if (event.key === Qt.Key_Down) root.step(panel.columns);
                    else if (event.key === Qt.Key_Right || event.key === Qt.Key_Tab)
                        root.step(event.modifiers & Qt.ShiftModifier ? -1 : 1);
                    else return;
                    event.accepted = true;
                }
                Keys.onReleased: event => {
                    if (event.key === Qt.Key_Alt && !event.isAutoRepeat) {
                        root.accept(); event.accepted = true;
                    }
                }
                Text {
                    x: 24; y: 18
                    text: "Windows"
                    font.family: "Google Sans Flex"; font.pixelSize: 20
                    color: root.colour("onSurface", "f2f2f2")
                }
                Text {
                    anchors.right: parent.right; anchors.rightMargin: 24; y: 23
                    text: (root.selected + 1) + " / " + root.windows.length
                    font.family: "Google Sans Flex"; font.pixelSize: 14
                    color: root.colour("onSurfaceVariant", "b5b5b5")
                }
                Flickable {
                    id: cards
                    x: 20; y: 58; width: parent.width - 40; height: parent.height - 106
                    contentWidth: width
                    contentHeight: Math.ceil(root.windows.length / panel.columns) * 260
                    boundsBehavior: Flickable.StopAtBounds
                    clip: true
                    function revealSelection() {
                        const y = Math.floor(root.selected / panel.columns) * 260;
                        if (y < contentY) contentY = y;
                        else if (y + 260 > contentY + height) contentY = y + 260 - height;
                        contentY = Math.max(0, Math.min(contentY, contentHeight - height));
                    }
                    Component.onCompleted: revealSelection()
                    Connections {
                        target: root
                        function onSelectedChanged() { cards.revealSelection(); }
                    }
                    Grid {
                        columns: panel.columns
                        Repeater {
                            model: root.windows
                            delegate: Item {
                        id: card
                        required property var modelData
                        required property int index
                        width: 328; height: 260
                        Rectangle {
                            anchors.fill: parent; anchors.margins: 5
                            radius: 22
                            color: root.colour(card.index === root.selected ? "surfaceContainerHighest" : "surface", "242424")
                            border.width: card.index === root.selected ? 2 : 1
                            border.color: root.colour(card.index === root.selected ? "primary" : "outlineVariant", "777777")
                            ClippingRectangle {
                                x: 10; y: 10; width: parent.width - 20; height: 168
                                radius: 14
                                color: root.colour("surfaceContainerLowest", "080808")
                                Item {
                                    anchors.fill: parent
                                    ScreencopyView {
                                        id: preview
                                        anchors.centerIn: parent
                                        captureSource: card.modelData?.wayland ?? null
                                        live: card.y + card.height > cards.contentY && card.y < cards.contentY + cards.height
                                        constraintSize: Qt.size(298, 168)
                                        width: implicitWidth; height: implicitHeight
                                    }
                                    IconImage {
                                        anchors.centerIn: parent
                                        visible: !preview.hasContent
                                        implicitSize: 48
                                        source: root.icon(card.modelData)
                                    }
                                }
                            }
                            IconImage {
                                x: 14; y: 191; implicitSize: 30
                                source: root.icon(card.modelData)
                            }
                            Text {
                                x: 55; y: 187; width: parent.width - 68
                                text: card.modelData?.title || root.appName(card.modelData)
                                textFormat: Text.PlainText; elide: Text.ElideRight
                                font.family: "Google Sans Flex"; font.pixelSize: 16
                                color: root.colour("onSurface", "f2f2f2")
                            }
                            Text {
                                x: 55; y: 214; width: parent.width - 68
                                text: root.appName(card.modelData) + "  ·  " + (card.modelData?.workspace?.name || "")
                                textFormat: Text.PlainText; elide: Text.ElideRight
                                font.family: "Google Sans Flex"; font.pixelSize: 12
                                color: root.colour("onSurfaceVariant", "b5b5b5")
                            }
                            MouseArea {
                                anchors.fill: parent
                                onClicked: { root.selected = card.index; root.accept(); }
                                onWheel: event => root.step(event.angleDelta.y < 0 ? 1 : -1)
                            }
                        }
                    }
                }
                    }
                    }
                Text {
                    anchors.horizontalCenter: parent.horizontalCenter; anchors.bottom: parent.bottom; anchors.bottomMargin: 16
                    text: "Tab to cycle · Shift+Tab back · Release Alt to switch · Esc to cancel"
                    font.family: "Google Sans Flex"; font.pixelSize: 12
                    color: root.colour("onSurfaceVariant", "b5b5b5")
                }
            }
        }
    }
}
