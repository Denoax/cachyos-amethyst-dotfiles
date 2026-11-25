import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import "."

PanelWindow {
    id: pill
    required property var session
    readonly property bool recording: session.report.services?.["Screen recording"] === "active"
    screen: session.centerScreen
    visible: !!session.centerScreen && !session.page && (session.seconds > 0 || session.showTrack || recording)
    anchors.top: true
    margins.top: 16
    implicitWidth: Math.max(138, Math.min(425, contents.implicitWidth + 34))
    implicitHeight: 40
    color: "transparent"
    exclusionMode: ExclusionMode.Ignore
    WlrLayershell.namespace: "mono-status-pill"
    WlrLayershell.layer: WlrLayer.Top
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.None

    Rectangle {
        anchors.fill: parent
        radius: height / 2
        color: Theme.surface
        border.width: 1
        border.color: Theme.border
        RowLayout {
            id: contents
            anchors.fill: parent
            anchors.leftMargin: 15
            anchors.rightMargin: 15
            spacing: 9
            LabelText {
                text: pill.recording ? "●" : pill.session.seconds > 0 ? "◷" : "♫"
                color: Theme.accent
            }
            LabelText {
                text: pill.recording ? "Recording"
                    : pill.session.seconds > 0 ? "Focus  " + pill.session.timeText(pill.session.seconds)
                    : pill.session.track
                Layout.fillWidth: true
                font.pixelSize: 14
            }
        }
        TapHandler {
            onTapped: pill.session.open(pill.recording ? "captures" : pill.session.seconds > 0 ? "focus" : "audio")
        }
    }
}
