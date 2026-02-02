const { bind } = require("../keymap");

bind(
  "escape",
  "removeSecondaryCursors",
  "editorHasMultipleSelections && textInputFocus",
);
bind("ctrl+shift+up", "editor.action.insertCursorAbove", "editorTextFocus");
bind("ctrl+shift+down", "editor.action.insertCursorBelow", "editorTextFocus");
bind("ctrl+d", "editor.action.addSelectionToNextFindMatch", "editorFocus");
bind("ctrl+shift+d", "cursorUndo", "editorFocus");
bind("ctrl+alt+d", "editor.action.selectHighlights", "editorFocus");
