import QtQuick
import Quickshell
import Quickshell.Wayland
import "."

PanelWindow {
    id: widget
    required property var session
    screen: session.widgetScreen
    visible: !!session.widgetScreen
    anchors { top: true; right: true }
    margins { top: 37; right: 36 }
    implicitWidth: 252
    implicitHeight: 114
    exclusionMode: ExclusionMode.Ignore
    color: "transparent"
    WlrLayershell.namespace: "mono-desktop-widgets"
    WlrLayershell.layer: WlrLayer.Bottom
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.None
    mask: Region {}

    Rectangle {
        anchors.fill: parent
        radius: 23
        color: Qt.alpha(Theme.surface, 0.90)
        border.color: Theme.border
        border.width: 1

        Column {
            anchors.fill: parent
            anchors.margins: 15
            spacing: 7
            LabelText { text: "System"; font.pixelSize: 18; font.weight: Font.DemiBold }
            LabelText {
                text: [
                    widget.session.report.gpu?.[0] ? "GPU  " + Math.round(Number(widget.session.report.gpu[0])) + " °C" : "",
                    widget.session.report.memory === undefined ? "" : "RAM  " + widget.session.report.memory + "%"
                ].filter(Boolean).join("   ·   ")
                width: parent.width; secondary: true
            }
            LabelText {
                text: widget.session.checkedUpdates
                    ? (widget.session.updateList.length ? widget.session.updateList.length + " package updates" : "Packages up to date")
                    : "Checking packages…"
                width: parent.width; secondary: true; font.pixelSize: 13
            }
        }
    }
}
