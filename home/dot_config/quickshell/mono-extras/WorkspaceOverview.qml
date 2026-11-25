import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import Quickshell
import Quickshell.Hyprland
import Quickshell.Wayland
import Quickshell.Widgets
import "."

PanelWindow {
    id: panel
    required property var session
    property var cards: []
    property var dragWindow: null
    property var dropCard: null
    readonly property var monitors: [...Hyprland.monitors.values].sort((a, b) => a.x - b.x)
    readonly property var workspaces: Hyprland.workspaces.values.filter(space => !space.name.startsWith("special:"))
    readonly property var windows: Hyprland.toplevels.values.filter(window =>
        window.lastIpcObject.mapped && !window.lastIpcObject.hidden && window.workspace)

    screen: session.panelScreen
    implicitWidth: Math.min(1380, (screen?.width ?? 1920) - 100)
    implicitHeight: Math.min(740, (screen?.height ?? 1080) - 90)
    exclusionMode: ExclusionMode.Ignore
    color: "transparent"
    WlrLayershell.namespace: "mono-workspace-overview"
    WlrLayershell.layer: WlrLayer.Overlay
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.Exclusive

    function workspaceWindows(workspace) {
        return windows.filter(window => window.workspace === workspace
            || window.workspace.address === workspace.address);
    }

    function destination(point) {
        return cards.find(card => {
            const local = card.mapFromItem(frame, point.x, point.y);
            return card.contains(local) && card.viewport.contains(card.viewport.mapFromItem(card, local.x, local.y));
        }) || null;
    }

    function moveDrag(tile, x, y) {
        if (dragWindow === tile.window)
            dropCard = destination(tile.mapToItem(frame, x, y));
    }

    function finishDrag(tile, x, y) {
        if (dragWindow !== tile.window) return;
        const target = destination(tile.mapToItem(frame, x, y));
        if (target && target.workspace !== tile.window.workspace)
            session.moveWindow(tile.window, target.workspace);
        dragWindow = null;
        dropCard = null;
    }

    HyprlandFocusGrab {
        active: true
        windows: [panel]
        onCleared: panel.session.page = ""
    }

    Rectangle {
        id: frame
        anchors.fill: parent
        radius: 32
        color: Theme.surface
        border.width: 1
        border.color: Theme.border
        focus: true
        Keys.onEscapePressed: panel.session.page = ""

        ColumnLayout {
            anchors.fill: parent
            anchors.margins: 26
            spacing: 16

            RowLayout {
                Layout.fillWidth: true
                LabelText { text: "Workspaces"; font.pixelSize: 29; font.weight: Font.DemiBold; Layout.fillWidth: true }
                LabelText { text: "Click to focus · Drag to move"; secondary: true }
                Action { text: "Close"; onClicked: panel.session.page = "" }
            }
            Rectangle { Layout.fillWidth: true; Layout.preferredHeight: 1; color: Theme.border }

            RowLayout {
                Layout.fillWidth: true
                Layout.fillHeight: true
                spacing: 14
                Repeater {
                    model: panel.monitors
                    delegate: ColumnLayout {
                        id: lane
                        required property var modelData
                        Layout.fillWidth: true
                        Layout.fillHeight: true
                        Layout.preferredWidth: 400
                        spacing: 9

                        RowLayout {
                            LabelText {
                                text: lane.modelData.name
                                font.pixelSize: 18
                                font.weight: Font.DemiBold
                                Layout.fillWidth: true
                            }
                            LabelText { text: lane.modelData.name; secondary: true; font.pixelSize: 13 }
                        }
                        Flickable {
                            id: columnScroll
                            Layout.fillWidth: true
                            Layout.fillHeight: true
                            contentWidth: width
                            contentHeight: workspacesColumn.implicitHeight
                            boundsBehavior: Flickable.StopAtBounds
                            interactive: !panel.dragWindow
                            clip: true
                            ScrollBar.vertical: ScrollBar {}

                            Column {
                                id: workspacesColumn
                                width: parent.width - 5
                                spacing: 9
                                Repeater {
                                    model: panel.workspaces.filter(space => space.monitor?.name === lane.modelData.name)
                                        .sort((a, b) => (a.id < 1 ? 99 : a.id) - (b.id < 1 ? 99 : b.id))
                                    delegate: Rectangle {
                                        id: spaceCard
                                        required property var modelData
                                        readonly property var workspace: modelData
                                        readonly property Item viewport: columnScroll
                                        readonly property var occupants: panel.workspaceWindows(workspace)
                                        width: workspacesColumn.width
                                        height: workspaceBody.implicitHeight + 22
                                        radius: 18
                                        color: panel.dropCard === spaceCard ? Theme.selected : Theme.background
                                        border.width: panel.dropCard === spaceCard ? 2 : 1
                                        border.color: workspace.active || panel.dropCard === spaceCard ? Theme.accent : Theme.border
                                        Component.onCompleted: panel.cards = panel.cards.concat([spaceCard])
                                        Component.onDestruction: panel.cards = panel.cards.filter(card => card !== spaceCard)

                                        ColumnLayout {
                                            id: workspaceBody
                                            anchors { left: parent.left; right: parent.right; top: parent.top; margins: 11 }
                                            spacing: 8
                                            Action {
                                                text: spaceCard.workspace.id > 0 ? "Workspace " + spaceCard.workspace.name : spaceCard.workspace.name
                                                selected: spaceCard.workspace.focused
                                                implicitHeight: 32
                                                onClicked: panel.session.focusWorkspace(spaceCard.workspace)
                                            }
                                            LabelText {
                                                visible: !spaceCard.occupants.length
                                                text: "Empty workspace"
                                                secondary: true
                                                font.pixelSize: 13
                                                Layout.leftMargin: 5
                                            }
                                            Flow {
                                                visible: spaceCard.occupants.length > 0
                                                Layout.fillWidth: true
                                                spacing: 7
                                                Repeater {
                                                    model: spaceCard.occupants
                                                    delegate: Item {
                                                        id: tile
                                                        required property var modelData
                                                        readonly property var window: modelData
                                                        readonly property var entry: DesktopEntries.heuristicLookup(window.lastIpcObject.class || "")
                                                        width: (workspaceBody.width - 7) / 2
                                                        height: 120
                                                        opacity: panel.dragWindow === window ? 0.56 : 1
                                                        Rectangle {
                                                            anchors.fill: parent
                                                            radius: 13
                                                            color: hover.hovered ? Theme.selected : Theme.raised
                                                            border.color: hover.hovered ? Theme.accent : Theme.border
                                                            border.width: 1
                                                        }
                                                        ClippingRectangle {
                                                            anchors { left: parent.left; right: parent.right; top: parent.top; margins: 6 }
                                                            height: 82
                                                            radius: 8
                                                            color: Theme.background
                                                            ScreencopyView {
                                                                id: preview
                                                                anchors.centerIn: parent
                                                                captureSource: tile.window.wayland ?? null
                                                                live: parent.visible && !panel.dragWindow && tile.window.workspace?.active
                                                                constraintSize: Qt.size(parent.width, parent.height)
                                                                width: implicitWidth
                                                                height: implicitHeight
                                                            }
                                                            IconImage {
                                                                anchors.centerIn: parent
                                                                visible: !preview.hasContent
                                                                implicitSize: 32
                                                                source: Quickshell.iconPath(tile.entry?.icon || "application-x-executable", "application-x-executable")
                                                            }
                                                        }
                                                        LabelText {
                                                            anchors { left: parent.left; right: parent.right; bottom: parent.bottom; margins: 10 }
                                                            text: tile.window.title || tile.entry?.name || tile.window.lastIpcObject.class || "Window"
                                                            font.pixelSize: 13
                                                        }
                                                        HoverHandler { id: hover }
                                                        TapHandler { onTapped: panel.session.activate(tile.window) }
                                                        DragHandler {
                                                            id: drag
                                                            target: null
                                                            property point lastPosition
                                                            onActiveChanged: {
                                                                if (active) {
                                                                    panel.dragWindow = tile.window;
                                                                    lastPosition = centroid.position;
                                                                    panel.moveDrag(tile, lastPosition.x, lastPosition.y);
                                                                } else panel.finishDrag(tile, lastPosition.x, lastPosition.y);
                                                            }
                                                            onTranslationChanged: if (active) {
                                                                lastPosition = centroid.position;
                                                                panel.moveDrag(tile, lastPosition.x, lastPosition.y);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
