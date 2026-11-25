import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import "."

PanelWindow {
    id: preview
    required property var session
    screen: session.centerScreen
    anchors { bottom: true; right: true }
    margins { right: 33; bottom: 32 }
    implicitWidth: 300
    implicitHeight: 188
    exclusionMode: ExclusionMode.Ignore
    color: "transparent"
    WlrLayershell.namespace: "mono-capture-preview"
    WlrLayershell.layer: WlrLayer.Overlay
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.None

    Rectangle {
        anchors.fill: parent
        radius: 20
        color: Theme.surface
        border.width: 1
        border.color: Theme.border
        ColumnLayout {
            anchors.fill: parent
            anchors.margins: 12
            spacing: 7
            Image {
                Layout.fillWidth: true
                Layout.fillHeight: true
                sourceSize.width: 380
                source: "file://" + preview.session.recentCapture
                fillMode: Image.PreserveAspectFit
                asynchronous: true
            }
            RowLayout {
                LabelText { text: "Screenshot"; Layout.fillWidth: true; font.pixelSize: 14 }
                Action {
                    text: "Copy"
                    implicitHeight: 32
                    onClicked: { preview.session.action(["copy-capture", preview.session.recentCapture]); preview.session.recentCapture = ""; }
                }
                Action {
                    text: "Annotate"
                    implicitHeight: 32
                    onClicked: {
                        const file = preview.session.recentCapture;
                        preview.session.recentCapture = "";
                        preview.session.launch(["swappy", "-f", file]);
                    }
                }
            }
        }
    }
}
