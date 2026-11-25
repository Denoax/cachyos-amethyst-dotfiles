import QtQuick
import "."

Text {
    property bool secondary: false
    color: secondary ? Theme.muted : Theme.ink
    font.family: Theme.font
    font.pixelSize: 15
    textFormat: Text.PlainText
    elide: Text.ElideRight
}
