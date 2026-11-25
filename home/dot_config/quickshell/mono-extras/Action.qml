import QtQuick
import QtQuick.Controls
import "."

Button {
    id: control
    property bool selected: false
    property bool emphasis: false
    property string iconText: ""

    hoverEnabled: true
    leftPadding: 15
    rightPadding: 15
    implicitHeight: 38
    opacity: enabled ? 1 : 0.55

    contentItem: Text {
        text: control.iconText ? control.iconText + "  " + control.text : control.text
        textFormat: Text.PlainText
        color: control.emphasis ? Theme.onAccent : Theme.ink
        font.family: Theme.font
        font.pixelSize: 14
        font.weight: control.selected || control.emphasis ? Font.DemiBold : Font.Medium
        horizontalAlignment: Text.AlignHCenter
        verticalAlignment: Text.AlignVCenter
        elide: Text.ElideRight
    }
    background: Rectangle {
        radius: 14
        color: control.emphasis ? Theme.accent
            : control.down || control.selected || control.hovered ? Theme.selected : Theme.raised
        border.width: control.visualFocus || control.selected ? 1 : 0
        border.color: Theme.accent
        Behavior on color { ColorAnimation { duration: 110 } }
    }
}
