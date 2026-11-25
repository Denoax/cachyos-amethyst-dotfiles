import QtQuick
import QtQuick.Controls
import Quickshell
import Quickshell.Hyprland
import Quickshell.Wayland
import Quickshell.Widgets
import "."

PanelWindow {
    id: dock
    required property var session
    readonly property var monitor: Hyprland.monitors.values.find(monitor => monitor.name === screen?.name)
    readonly property bool suppressed: !!session.page || !!monitor?.activeWorkspace?.hasFullscreen
    property bool revealed: false
    property var previewTile: null
    readonly property var pins: [
        {id:"kitty", label:"Kitty", icon:"kitty"},
        {id:"org.kde.dolphin", label:"Files", icon:"system-file-manager"},
        {id:"amethyst-code", label:"VS Code", icon:"visual-studio-code"},
        {id:DesktopEntries.byId("brave-browser") ? "brave-browser" : "firefox", label:"Browser", icon:"web-browser"},
        {id:"com.shellyorg.shelly", label:"Software", icon:"system-software-install"}
    ]
    screen: session.centerScreen
    visible: !!session.centerScreen
    anchors.bottom: true
    implicitWidth: 410
    implicitHeight: 204
    color: "transparent"
    exclusionMode: ExclusionMode.Ignore
    WlrLayershell.namespace: "mono-desktop-dock"
    WlrLayershell.layer: WlrLayer.Top
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.None

    function matching(pin) {
        return Hyprland.toplevels.values.filter(window => {
            const app = window.lastIpcObject.class || "";
            return window.lastIpcObject.mapped && !window.lastIpcObject.hidden
                && !window.workspace?.name.startsWith("special:")
                && (DesktopEntries.heuristicLookup(app)?.id === pin
                    || app === pin || (pin === "amethyst-code" && (app === "code" || app === "vscode-ms")));
        }).sort((a, b) => (a.lastIpcObject.focusHistoryID ?? 9999) - (b.lastIpcObject.focusHistoryID ?? 9999));
    }

    onSuppressedChanged: if (suppressed) revealed = false
    onRevealedChanged: if (!revealed) previewTile = null

    mask: Region {
        Region { item: dock.suppressed ? null : dock.revealed ? content : edge }
        Region { item: previews.visible ? previews : null }
    }
    Timer {
        id: hideDelay
        interval: 250
        onTriggered: if (!dockHover.hovered && !edgeHover.hovered && !previewHover.hovered) dock.revealed = false
    }
    Item {
        id: edge
        anchors { left: parent.left; right: parent.right; bottom: parent.bottom }
        height: 6
        HoverHandler {
            id: edgeHover
            onHoveredChanged: {
                if (hovered && !dock.suppressed) dock.revealed = true;
                else hideDelay.restart();
            }
        }
    }
    Rectangle {
        id: content
        anchors { left: parent.left; right: parent.right; bottom: parent.bottom; leftMargin: 2; rightMargin: 2 }
        height: 64
        radius: 21
        color: Theme.surface
        border.width: 1
        border.color: Theme.border
        opacity: dock.revealed && !dock.suppressed ? 1 : 0
        visible: opacity > 0
        Behavior on opacity { NumberAnimation { duration: 130 } }
        HoverHandler {
            id: dockHover
            onHoveredChanged: if (!hovered) hideDelay.restart()
        }
        Row {
            anchors.centerIn: parent
            spacing: 7
            Repeater {
                model: dock.pins
                delegate: Rectangle {
                    id: iconTile
                    required property var modelData
                    readonly property var app: DesktopEntries.byId(modelData.id)
                    readonly property var clients: dock.matching(modelData.id)
                    width: 50
                    height: 47
                    radius: 14
                    color: iconHover.hovered ? Theme.selected : "transparent"
                    IconImage {
                        anchors.horizontalCenter: parent.horizontalCenter
                        y: 6
                        implicitSize: 30
                        source: Quickshell.iconPath(iconTile.app?.icon || iconTile.modelData.icon, "application-x-executable")
                    }
                    Rectangle {
                        anchors.horizontalCenter: parent.horizontalCenter
                        anchors.bottom: parent.bottom
                        anchors.bottomMargin: 3
                        visible: iconTile.clients.length > 0
                        width: 10
                        height: 3
                        radius: 2
                        color: Theme.accent
                    }
                    HoverHandler {
                        id: iconHover
                        onHoveredChanged: if (hovered) {
                            if (iconTile.clients.length) previewDelay.restart();
                            else dock.previewTile = null;
                        } else previewDelay.stop();
                    }
                    Timer { id: previewDelay; interval: 320; onTriggered: dock.previewTile = iconTile }
                    ToolTip.visible: iconHover.hovered && !iconTile.clients.length
                    ToolTip.delay: 450
                    ToolTip.text: modelData.label
                    TapHandler {
                        onTapped: {
                            dock.revealed = false;
                            if (iconTile.clients.length) dock.session.activate(iconTile.clients[0]);
                            else if (iconTile.modelData.id === "com.shellyorg.shelly")
                                Quickshell.execDetached([dock.session.home + "/.local/bin/caelestia-desktop", "software"]);
                            else if (iconTile.app) Quickshell.execDetached(["gtk-launch", iconTile.modelData.id]);
                        }
                    }
                }
            }
            Action {
                text: "Desktop"
                anchors.verticalCenter: parent.verticalCenter
                onClicked: { dock.revealed = false; dock.session.open("controls"); }
            }
        }
    }

    Rectangle {
        id: previews
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: content.top
        anchors.bottomMargin: 4
        width: previewRow.implicitWidth + 16
        height: 128
        visible: dock.revealed && !dock.suppressed && !!dock.previewTile
            && dock.previewTile.clients.length > 0
        radius: 18
        color: Theme.surface
        border.width: 1
        border.color: Theme.border
        HoverHandler { id: previewHover; onHoveredChanged: if (!hovered) hideDelay.restart() }
        Row {
            id: previewRow
            anchors.centerIn: parent
            spacing: 6
            Repeater {
                model: previews.visible ? dock.previewTile.clients.slice(0, 3) : []
                delegate: Rectangle {
                    id: thumbnail
                    required property var modelData
                    width: 117
                    height: 112
                    radius: 12
                    color: previewPointer.hovered ? Theme.selected : Theme.raised
                    ClippingRectangle {
                        anchors { top: parent.top; left: parent.left; right: parent.right; margins: 5 }
                        height: 80
                        radius: 9
                        color: Theme.background
                        ScreencopyView {
                            id: windowImage
                            anchors.centerIn: parent
                            captureSource: thumbnail.modelData.wayland ?? null
                            live: previews.visible
                            constraintSize: Qt.size(parent.width, parent.height)
                            width: implicitWidth
                            height: implicitHeight
                        }
                        IconImage {
                            visible: !windowImage.hasContent
                            anchors.centerIn: parent
                            implicitSize: 30
                            source: Quickshell.iconPath(dock.previewTile?.app?.icon || "application-x-executable", "application-x-executable")
                        }
                    }
                    LabelText {
                        anchors { left: parent.left; right: parent.right; bottom: parent.bottom; margins: 7 }
                        text: thumbnail.modelData.title || dock.previewTile?.modelData.label || "Window"
                        font.pixelSize: 12
                    }
                    HoverHandler { id: previewPointer }
                    TapHandler { onTapped: { dock.session.activate(thumbnail.modelData); dock.revealed = false; } }
                }
            }
        }
    }
}
