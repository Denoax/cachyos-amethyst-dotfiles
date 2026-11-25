pragma Singleton

import QtQuick
import Quickshell
import Quickshell.Io

Singleton {
    id: theme

    property var colors: ({})
    readonly property string font: uiFont.status === FontLoader.Ready ? uiFont.name : "Noto Sans"
    readonly property color background: shade("surfaceContainerLowest", "101010")
    readonly property color surface: shade("surfaceContainerLow", "171717")
    readonly property color raised: shade("surfaceContainerHigh", "282828")
    readonly property color selected: shade("surfaceContainerHighest", "343434")
    readonly property color border: Qt.tint(raised, Qt.alpha(shade("outlineVariant", "777777"), 0.23))
    readonly property color ink: shade("onSurface", "f4f4f4")
    readonly property color muted: shade("onSurfaceVariant", "bdbdbd")
    readonly property color accent: shade("primary", "ededed")
    readonly property color onAccent: shade("onPrimary", "161616")

    function shade(role, fallback) {
        return "#" + (colors[role] ?? fallback);
    }

    FontLoader {
        id: uiFont
        source: "file:///etc/xdg/quickshell/caelestia/assets/google-sans-flex/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf"
    }

    FileView {
        path: Quickshell.env("HOME") + "/.local/share/caelestia-monochrome/palette.json"
        watchChanges: true
        onFileChanged: reload()
        onLoaded: {
            try { theme.colors = JSON.parse(text()).colours || {}; }
            catch (error) { console.warn("Could not read the Caelestia palette:", error); }
        }
    }
}
