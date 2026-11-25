import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import Quickshell
import Quickshell.Hyprland
import Quickshell.Wayland
import "."

PanelWindow {
    id: panel
    required property var session
    screen: session.panelScreen
    implicitWidth: Math.min(1070, (screen?.width ?? 1920) - 64)
    implicitHeight: Math.min(732, (screen?.height ?? 1080) - 70)
    exclusionMode: ExclusionMode.Ignore
    color: "transparent"
    WlrLayershell.layer: WlrLayer.Overlay
    WlrLayershell.namespace: "mono-control-center"
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.Exclusive

    function invoke(...args) { session.launch(["caelestia", "shell", ...args]); }

    HyprlandFocusGrab {
        active: true
        windows: [panel]
        onCleared: panel.session.page = ""
    }

    Rectangle {
        id: frame
        anchors.fill: parent
        radius: 30
        color: Theme.surface
        border.color: Theme.border
        border.width: 1
        focus: true
        Keys.onEscapePressed: panel.session.page = ""

        ColumnLayout {
            anchors.fill: parent
            anchors.margins: 25
            spacing: 16

            RowLayout {
                Layout.fillWidth: true
                LabelText { text: "Desktop"; font.pixelSize: 29; font.weight: Font.DemiBold; Layout.fillWidth: true }
                LabelText {
                    text: panel.session.notice
                    visible: text.length > 0
                    secondary: true
                    Layout.maximumWidth: 470
                }
                Action { text: "Close"; onClicked: panel.session.page = "" }
            }

            Flow {
                Layout.fillWidth: true
                spacing: 7
                Repeater {
                    model: panel.session.tabs
                    delegate: Action {
                        required property var modelData
                        text: modelData.title
                        selected: panel.session.page === modelData.id
                        onClicked: panel.session.open(modelData.id)
                    }
                }
            }
            Rectangle { Layout.fillWidth: true; Layout.preferredHeight: 1; color: Theme.border }

            StackLayout {
                id: stack
                Layout.fillHeight: true
                Layout.fillWidth: true
                currentIndex: Math.max(0, panel.session.tabs.findIndex(tab => tab.id === panel.session.page))

                Loader { active: StackLayout.isCurrentItem; sourceComponent: controls }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: displays }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: wallpapers }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: shortcuts }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: clipboard }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: focusTools }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: audio }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: captures }
                Loader { active: StackLayout.isCurrentItem; sourceComponent: alerts }
            }
        }
    }

    component Section: Rectangle {
        radius: 20
        color: Theme.background
        border.color: Theme.border
        border.width: 1
    }

    Component {
        id: controls
        Flickable {
            id: controlScroll
            contentWidth: width
            contentHeight: controlsBody.implicitHeight
            boundsBehavior: Flickable.StopAtBounds
            clip: true
            ScrollBar.vertical: ScrollBar {}
            ColumnLayout {
                id: controlsBody
                width: controlScroll.width - 5
                spacing: 13
                SearchField {
                    id: settingsLookup
                    Layout.fillWidth: true
                    placeholderText: "Find a desktop control"
                }
                Flow {
                    visible: settingsLookup.text.trim().length > 0
                    Layout.fillWidth: true
                    spacing: 8
                    Repeater {
                        model: [
                            {title:"Workspace overview", words:"windows taskview monitor", page:"overview"},
                            {title:"Monitor power and hardware", words:"screen displays refresh rate power", page:"displays"},
                            {title:"Wallpaper library", words:"background video theme", page:"wallpapers"},
                            {title:"Keyboard shortcuts", words:"keybind hotkey search", page:"shortcuts"},
                            {title:"Clipboard and emoji", words:"history copy paste emojis", page:"clipboard"},
                            {title:"Timer, notes and tasks", words:"pomodoro stopwatch focus reminder", page:"focus"},
                            {title:"App audio routing", words:"sound volume mixer speaker", page:"audio"},
                            {title:"Screenshot gallery", words:"capture annotation", page:"captures"},
                            {title:"Notification rules", words:"alerts silence popups dnd", page:"alerts"}
                        ].filter(item => (item.title + " " + item.words).toLowerCase().includes(settingsLookup.text.trim().toLowerCase()))
                        delegate: Action {
                            required property var modelData
                            text: modelData.title
                            onClicked: panel.session.open(modelData.page)
                        }
                    }
                }
                Flow {
                    Layout.fillWidth: true
                    spacing: 8
                    Action { text: "Workspaces"; onClicked: panel.session.open("overview") }
                    Action { text: "Caelestia settings"; onClicked: panel.invoke("nexus", "open") }
                    Action { text: "Keep awake"; onClicked: panel.invoke("idleInhibitor", "toggle") }
                    Action { text: "Night light"; onClicked: panel.session.launch([panel.session.home + "/.local/bin/caelestia-desktop", "nightlight"]) }
                    Action { text: "Do not disturb"; onClicked: panel.invoke("notifs", "toggleDnd") }
                    Action { text: "Audio mixer"; onClicked: panel.session.launch(["pavucontrol"]) }
                    Action { text: "Overview hot corner"; selected: panel.session.cornerEnabled;
                        onClicked: { panel.session.cornerEnabled = !panel.session.cornerEnabled; panel.session.persist(); } }
                }

                RowLayout {
                    Layout.fillWidth: true
                    spacing: 12
                    Repeater {
                        model: [
                            {title: "Package updates", value: panel.session.checkedUpdates ? String(panel.session.updateList.length) : "Checking…", hint: "Open software and updates"},
                            {title: "System memory", value: panel.session.report.memory === undefined ? "…" : panel.session.report.memory + "%", hint: "Used"},
                            {title: "GPU temperature", value: panel.session.report.gpu?.[0] ? Math.round(Number(panel.session.report.gpu[0])) + " °C" : "—", hint: panel.session.report.gpu?.[1] ? panel.session.report.gpu[1] + "% utilization" : "Unavailable"}
                        ]
                        delegate: Section {
                            id: card
                            required property var modelData
                            Layout.fillWidth: true
                            Layout.preferredWidth: 230
                            Layout.preferredHeight: 118
                            Column {
                                anchors.fill: parent
                                anchors.margins: 15
                                spacing: 5
                                LabelText { text: card.modelData.title; secondary: true }
                                LabelText { text: card.modelData.value; font.pixelSize: 27; font.weight: Font.DemiBold }
                                LabelText { text: card.modelData.hint; secondary: true; font.pixelSize: 13 }
                            }
                            TapHandler {
                                enabled: card.modelData.title === "Package updates"
                                onTapped: panel.session.launch([panel.session.home + "/.local/bin/caelestia-desktop", "software"])
                            }
                        }
                    }
                }

                LabelText { text: "Desktop health"; font.pixelSize: 19; font.weight: Font.DemiBold }
                Flow {
                    Layout.fillWidth: true
                    spacing: 8
                    Repeater {
                        model: Object.entries(panel.session.report.services || {}).filter(row => row[0] !== "Screen recording")
                            .concat([["Flatpak document mount", panel.session.report.documentMount ? "active" : "unavailable"]])
                        delegate: Rectangle {
                            required property var modelData
                            width: badge.implicitWidth + 23
                            height: 34
                            color: Theme.raised
                            radius: 12
                            LabelText {
                                id: badge
                                anchors.centerIn: parent
                                text: (parent.modelData[1] === "active" ? "●  " : "○  ") + parent.modelData[0]
                                secondary: parent.modelData[1] !== "active"
                                font.pixelSize: 13
                            }
                        }
                    }
                }
                RowLayout {
                    LabelText { text: "Processes"; font.pixelSize: 19; font.weight: Font.DemiBold; Layout.fillWidth: true }
                    Action { text: "CPU"; selected: !sortMemory.checked; onClicked: sortMemory.checked = false }
                    Action { id: sortMemory; text: "Memory"; checkable: true; selected: checked }
                    Action { text: "Open btop"; onClicked: panel.session.launch(["kitty", "--class", "MonoTaskManager", "btop"]) }
                }
                Repeater {
                    model: (sortMemory.checked ? panel.session.processList.memory : panel.session.processList.cpu).slice(0, 7)
                    delegate: RowLayout {
                        required property var modelData
                        Layout.fillWidth: true
                        LabelText { text: modelData.name; Layout.fillWidth: true }
                        LabelText { text: modelData.cpu + "% CPU"; secondary: true; Layout.preferredWidth: 100 }
                        LabelText { text: modelData.memory + "% RAM"; secondary: true; Layout.preferredWidth: 100 }
                    }
                }
            }
        }
    }

    Component {
        id: displays
        ColumnLayout {
            spacing: 14
            LabelText { text: "Connected displays"; font.pixelSize: 20; font.weight: Font.DemiBold }
            RowLayout {
                Layout.fillWidth: true
                spacing: 12
                Repeater {
                    model: panel.session.report.outputs || []
                    delegate: Section {
                        id: displayCard
                        required property var modelData
                        Layout.fillWidth: true
                        Layout.preferredWidth: 250
                        Layout.preferredHeight: 177
                        border.color: modelData.focused ? Theme.accent : Theme.border
                        Column {
                            anchors.fill: parent
                            anchors.margins: 16
                            spacing: 8
                            LabelText { text: displayCard.modelData.name; font.pixelSize: 21; font.weight: Font.DemiBold }
                            LabelText { text: displayCard.modelData.model; width: parent.width; secondary: true }
                            LabelText { text: displayCard.modelData.width + " × " + displayCard.modelData.height
                                + "  ·  " + displayCard.modelData.rate + " Hz"; secondary: true }
                            LabelText { text: displayCard.modelData.powered ? "Active" : "Sleeping"; secondary: true }
                            RowLayout {
                                width: parent.width
                                visible: displayCard.modelData.brightness >= 0
                                Slider {
                                    id: brightness
                                    from: 0
                                    to: 100
                                    stepSize: 1
                                    Layout.fillWidth: true
                                    value: displayCard.modelData.brightness
                                    onMoved: {
                                        if (!pressed) applyLevel.restart();
                                    }
                                    onPressedChanged: if (!pressed && value !== displayCard.modelData.brightness) applyLevel.restart()
                                    Timer {
                                        id: applyLevel
                                        interval: 240
                                        onTriggered: panel.session.action(["brightness", displayCard.modelData.name, String(Math.round(brightness.value))])
                                    }
                                }
                                LabelText { text: Math.round(brightness.value) + "%"; secondary: true; font.pixelSize: 13 }
                            }
                        }
                    }
                }
            }
            RowLayout {
                Action { text: "Wake all displays"; onClicked: panel.session.action(["displays", "all"]) }
                Action { text: "Keep one display awake"; enabled: (panel.session.report.outputs?.length || 0) > 1; onClicked: panel.session.action(["displays", "center"]) }
            }
            LabelText { text: "Power profile"; font.pixelSize: 20; font.weight: Font.DemiBold }
            RowLayout {
                Repeater {
                    model: ["balanced", "power-saver", "performance"]
                    delegate: Action {
                        required property string modelData
                        text: ({"balanced": "Balanced", "power-saver": "Power saver", "performance": "Performance"})[modelData]
                        selected: panel.session.report.power === modelData
                        onClicked: panel.session.action(["power", modelData])
                    }
                }
            }
            Item { Layout.fillHeight: true }
        }
    }

    Component {
        id: wallpapers
        ColumnLayout {
            id: wallpapersPage
            property string output: "all"
            readonly property var outputs: panel.session.wallpaperList.outputs
            onOutputsChanged: if (!outputs.includes(output)) output = "all"
            readonly property var shown: panel.session.wallpaperList.items.filter(item =>
                (!favoritesOnly.checked || panel.session.favoriteWallpapers.includes(item.path))
                && item.name.toLowerCase().includes(wallpaperSearch.text.toLowerCase()))
            spacing: 12
            RowLayout {
                SearchField { id: wallpaperSearch; Layout.fillWidth: true; placeholderText: "Find a wallpaper" }
                Repeater {
                    model: [{id: "all", title: "All screens"}].concat(wallpapersPage.outputs.map(output => ({id: output, title: output})))
                    delegate: Action {
                        required property var modelData
                        text: modelData.title
                        selected: wallpapersPage.output === modelData.id
                        onClicked: wallpapersPage.output = modelData.id
                    }
                }
            }
            RowLayout {
                Action { id: favoritesOnly; text: "Favorites"; checkable: true; selected: checked }
                Action {
                    text: "Shuffle selection"
                    enabled: wallpapersPage.shown.length > 0
                    onClicked: {
                        const choices = wallpapersPage.shown;
                        panel.session.wall(wallpapersPage.output, choices[Math.floor(Math.random() * choices.length)].path);
                    }
                }
                LabelText {
                    visible: !wallpapersPage.shown.length
                    text: favoritesOnly.checked ? "Star a wallpaper to add it here." : "No matching wallpapers"
                    secondary: true
                }
            }
            GridView {
                id: wallpaperGrid
                Layout.fillWidth: true
                Layout.fillHeight: true
                clip: true
                cellWidth: width / Math.max(1, Math.floor(width / 260))
                cellHeight: 192
                model: wallpapersPage.shown
                delegate: Item {
                    id: wallTile
                    required property var modelData
                    width: wallpaperGrid.cellWidth - 11
                    height: wallpaperGrid.cellHeight - 11
                    Section {
                        anchors.fill: parent
                        border.color: panel.session.wallpaperList.selections[wallpapersPage.output] === wallTile.modelData.path ? Theme.accent : Theme.border
                        Image {
                            anchors { left: parent.left; right: parent.right; top: parent.top; margins: 8 }
                            height: parent.height - 53
                            fillMode: Image.PreserveAspectCrop
                            clip: true
                            asynchronous: true
                            sourceSize.width: 480
                            source: wallTile.modelData.preview
                        }
                        RowLayout {
                            anchors { left: parent.left; right: parent.right; bottom: parent.bottom; margins: 11 }
                            LabelText { text: wallTile.modelData.name; Layout.fillWidth: true; font.pixelSize: 14 }
                            LabelText { text: wallTile.modelData.video ? "Video" : "Image"; secondary: true; font.pixelSize: 12 }
                        }
                    }
                    TapHandler { onTapped: panel.session.wall(wallpapersPage.output, wallTile.modelData.path) }
                    Action {
                        anchors { top: parent.top; right: parent.right; margins: 13 }
                        text: panel.session.favoriteWallpapers.includes(wallTile.modelData.path) ? "★" : "☆"
                        implicitHeight: 33
                        z: 2
                        onClicked: panel.session.toggleFavorite(wallTile.modelData.path)
                    }
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }

    Component {
        id: shortcuts
        ColumnLayout {
            spacing: 12
            SearchField {
                id: shortcutSearch
                Layout.fillWidth: true
                placeholderText: "Search shortcut or action"
                Component.onCompleted: forceActiveFocus()
            }
            ListView {
                Layout.fillWidth: true
                Layout.fillHeight: true
                clip: true
                spacing: 5
                model: panel.session.bindings.filter(row =>
                    (row.keys + " " + row.label).toLowerCase().includes(shortcutSearch.text.toLowerCase()))
                delegate: Rectangle {
                    id: shortcutRow
                    required property var modelData
                    width: ListView.view.width
                    height: 39
                    color: Theme.background
                    radius: 12
                    RowLayout {
                        anchors.fill: parent
                        anchors.leftMargin: 14
                        anchors.rightMargin: 15
                        LabelText { text: shortcutRow.modelData.label; Layout.fillWidth: true }
                        LabelText { text: shortcutRow.modelData.keys; secondary: true }
                    }
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }

    Component {
        id: clipboard
        ColumnLayout {
            id: clipboardPage
            property bool emoji: false
            spacing: 12
            RowLayout {
                SearchField { id: clipSearch; Layout.fillWidth: true; placeholderText: clipboardPage.emoji ? "Search emoji" : "Search clipboard history"; Component.onCompleted: forceActiveFocus() }
                Action { text: "History"; selected: !clipboardPage.emoji; onClicked: clipboardPage.emoji = false }
                Action { text: "Emoji"; selected: clipboardPage.emoji; onClicked: clipboardPage.emoji = true }
                Action { text: "Full emoji picker"; onClicked: panel.session.launch(["caelestia", "emoji", "-p"]) }
            }
            ListView {
                id: clipList
                Layout.fillWidth: true
                Layout.fillHeight: true
                clip: true
                spacing: 5
                model: (clipboardPage.emoji ? [
                    {id:"👍",label:"Thumbs up"}, {id:"✨",label:"Sparkles"}, {id:"✔️",label:"Check"},
                    {id:"🔥",label:"Fire"}, {id:"😂",label:"Laughing"}, {id:"❤️",label:"Heart"},
                    {id:"👀",label:"Eyes"}, {id:"🎉",label:"Party"}, {id:"🚀",label:"Rocket"},
                    {id:"🙂",label:"Smile"}, {id:"🙏",label:"Thanks"}, {id:"🤔",label:"Thinking"},
                    {id:"✅",label:"Green check"}, {id:"⚠️",label:"Warning"}, {id:"💡",label:"Idea"}
                ] : panel.session.clipboardEntries).filter(row => row.label.toLowerCase().includes(clipSearch.text.toLowerCase()))
                delegate: Action {
                    required property var modelData
                    width: clipList.width
                    text: (clipboardPage.emoji ? modelData.id + "    " : "") + modelData.label
                    onClicked: panel.session.action([clipboardPage.emoji ? "clipboard-text" : "copy", modelData.id])
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }

    Component {
        id: focusTools
        ColumnLayout {
            id: focusPage
            property real now: Date.now()
            spacing: 12
            Timer { running: panel.session.stopwatchStart > 0; repeat: true; interval: 500; onTriggered: focusPage.now = Date.now() }
            RowLayout {
                Layout.fillWidth: true
                LabelText {
                    text: panel.session.timeText(panel.session.seconds)
                    font.pixelSize: 37
                    font.weight: Font.DemiBold
                    Layout.preferredWidth: 112
                }
                SearchField { id: timerMinutes; text: "25"; Layout.preferredWidth: 76; placeholderText: "Min";
                    validator: IntValidator { bottom: 1; top: 240 } }
                Action { text: "Start timer"; emphasis: true; onClicked: panel.session.startTimer(Number(timerMinutes.text)) }
                Action {
                    text: "Cancel timer"
                    enabled: panel.session.deadline > 0
                    onClicked: panel.session.cancelTimer()
                }
                Item { Layout.fillWidth: true }
                LabelText {
                    text: panel.session.timeText(panel.session.stopwatchElapsed + (panel.session.stopwatchStart
                        ? Math.max(0, Math.floor((focusPage.now - panel.session.stopwatchStart) / 1000)) : 0))
                    font.pixelSize: 25
                }
                Action {
                    text: panel.session.stopwatchStart ? "Pause" : "Stopwatch"
                    onClicked: {
                        focusPage.now = Date.now();
                        if (panel.session.stopwatchStart) {
                            panel.session.stopwatchElapsed += Math.floor((focusPage.now - panel.session.stopwatchStart) / 1000);
                            panel.session.stopwatchStart = 0;
                        } else panel.session.stopwatchStart = focusPage.now;
                        panel.session.persist();
                    }
                }
                Action { text: "Reset"; onClicked: { panel.session.stopwatchStart = 0; panel.session.stopwatchElapsed = 0; panel.session.persist(); } }
            }
            RowLayout {
                Layout.fillWidth: true
                Layout.fillHeight: true
                spacing: 16
                ColumnLayout {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    Layout.preferredWidth: 500
                    LabelText { text: "Notes"; font.pixelSize: 20; font.weight: Font.DemiBold }
                    ScrollView {
                        Layout.fillHeight: true
                        Layout.fillWidth: true
                        background: Rectangle { color: Theme.background; radius: 18; border.color: Theme.border }
                        TextArea {
                            id: notes
                            text: panel.session.note
                            placeholderText: "Write a note"
                            placeholderTextColor: Theme.muted
                            color: Theme.ink
                            font.family: Theme.font
                            font.pixelSize: 16
                            padding: 14
                            wrapMode: TextEdit.Wrap
                            onTextChanged: if (activeFocus && text !== panel.session.note) {
                                panel.session.note = text;
                                panel.session.persist();
                            }
                        }
                    }
                }
                ColumnLayout {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    Layout.preferredWidth: 460
                    LabelText { text: "Tasks"; font.pixelSize: 20; font.weight: Font.DemiBold }
                    RowLayout {
                        SearchField { id: newTask; Layout.fillWidth: true; placeholderText: "Add a task"
                            onAccepted: { panel.session.addTask(text); clear(); } }
                        Action { text: "Add"; onClicked: { panel.session.addTask(newTask.text); newTask.clear(); } }
                    }
                    ListView {
                        id: tasks
                        Layout.fillWidth: true
                        Layout.fillHeight: true
                        spacing: 6
                        clip: true
                        model: panel.session.taskList
                        delegate: RowLayout {
                            required property var modelData
                            required property int index
                            width: tasks.width
                            Action { text: modelData.done ? "✓" : "○"; onClicked: panel.session.editTask(index, false) }
                            LabelText { text: modelData.text; Layout.fillWidth: true; font.strikeout: modelData.done; secondary: modelData.done; wrapMode: Text.Wrap }
                            Action { text: "Remove"; onClicked: panel.session.editTask(index, true) }
                        }
                        ScrollBar.vertical: ScrollBar {}
                    }
                }
            }
        }
    }

    Component {
        id: audio
        ColumnLayout {
            spacing: 13
            RowLayout {
                LabelText { text: "Playback"; font.pixelSize: 20; font.weight: Font.DemiBold; Layout.fillWidth: true }
                Action { text: "Refresh"; onClicked: panel.session.refresh("audio") }
                Action { text: "Open mixer"; onClicked: panel.session.launch(["pavucontrol"]) }
            }
            LabelText { text: "App output routing"; secondary: true }
            ListView {
                id: streams
                Layout.fillWidth: true
                Layout.fillHeight: true
                clip: true
                spacing: 7
                model: panel.session.audioData.apps
                delegate: Item {
                    id: stream
                    required property var modelData
                    width: streams.width
                    height: 54
                    Section { anchors.fill: parent; radius: 13 }
                    RowLayout {
                        anchors.fill: parent
                        anchors.margins: 9
                        LabelText { text: stream.modelData.label; Layout.fillWidth: true; Layout.leftMargin: 5 }
                        ComboBox {
                            model: panel.session.audioData.outputs
                            textRole: "label"
                            valueRole: "id"
                            currentIndex: model.findIndex(output => output.index === stream.modelData.sink)
                            Layout.preferredWidth: 390
                            onActivated: panel.session.action(["route", stream.modelData.id, currentValue])
                        }
                    }
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }

    Component {
        id: captures
        ColumnLayout {
            RowLayout {
                LabelText { text: "Recent screenshots"; font.pixelSize: 20; font.weight: Font.DemiBold; Layout.fillWidth: true }
                Action { text: "Open folder"; onClicked: panel.session.launch(["xdg-open", panel.session.home + "/Pictures/Screenshots"]) }
                Action { text: "Capture region"; onClicked: panel.session.launch([panel.session.home + "/.local/bin/caelestia-desktop", "screenshot", "region"]) }
            }
            LabelText { visible: !panel.session.captureList.length; text: "Screenshots appear here after a capture."; secondary: true }
            GridView {
                id: gallery
                Layout.fillWidth: true
                Layout.fillHeight: true
                clip: true
                cellWidth: width / Math.max(1, Math.floor(width / 255))
                cellHeight: 174
                model: panel.session.captureList
                delegate: Item {
                    id: shot
                    required property var modelData
                    width: gallery.cellWidth - 10
                    height: gallery.cellHeight - 10
                    Section { anchors.fill: parent }
                    Image {
                        anchors { left: parent.left; right: parent.right; top: parent.top; margins: 7 }
                        height: parent.height - 48
                        source: shot.modelData.image
                        sourceSize.width: 500
                        fillMode: Image.PreserveAspectFit
                        asynchronous: true
                    }
                    Action {
                        anchors { left: parent.left; right: parent.right; bottom: parent.bottom; margins: 7 }
                        implicitHeight: 33
                        text: "Annotate"
                        onClicked: panel.session.launch(["swappy", "-f", shot.modelData.path])
                    }
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }

    Component {
        id: alerts
        ColumnLayout {
            id: alertPane
            spacing: 12
            RowLayout {
                LabelText { text: "Notification popups"; font.pixelSize: 20; font.weight: Font.DemiBold; Layout.fillWidth: true }
                Action { text: "Refresh"; onClicked: panel.session.refresh("alerts") }
            }
            LabelText { text: "Silenced messages still appear in Caelestia’s sidebar."; secondary: true }
            RowLayout {
                SearchField { id: alertApp; Layout.fillWidth: true; placeholderText: "App name as shown in a notification" }
                Action { text: "Silence app"; onClicked: {
                    if (alertApp.text.trim()) panel.session.action(["notification", alertApp.text, "silence"]);
                } }
            }
            ListView {
                id: appRules
                Layout.fillWidth: true
                Layout.fillHeight: true
                spacing: 7
                clip: true
                model: panel.session.alertRules
                delegate: RowLayout {
                    required property var modelData
                    width: appRules.width
                    LabelText { text: modelData.name; Layout.fillWidth: true }
                    Action {
                        text: modelData.silenced ? "Allow popups" : "Silence popups"
                        onClicked: panel.session.action(["notification", modelData.name, modelData.silenced ? "allow" : "silence"])
                    }
                }
                ScrollBar.vertical: ScrollBar {}
            }
        }
    }
}
