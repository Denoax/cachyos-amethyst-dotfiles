import QtQuick
import QtQuick.Controls
import "."

TextField {
    id: field
    color: Theme.ink
    placeholderTextColor: Theme.muted
    selectionColor: Theme.accent
    selectedTextColor: Theme.onAccent
    font.family: Theme.font
    font.pixelSize: 16
    leftPadding: 16
    rightPadding: 16
    implicitHeight: 46
    background: Rectangle {
        radius: 14
        color: Theme.background
        border.width: 1
        border.color: field.activeFocus ? Theme.accent : Theme.border
    }
}
