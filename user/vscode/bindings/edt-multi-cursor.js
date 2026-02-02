const { bind } = require("../keymap");

bind(
  "escape",
  "removeSecondaryCursors",
  "editorHasMultipleSelections && textInputFocus",
);
bind("ctrl+shift+up", "editor.action.insertCursorAbove", "editorTextFocus");
bind("ctrl+shift+down", "editor.action.insertCursorBelow", "editorTextFocus");
bind("ctrl+d", "editor.action.addSelectionToNextFindMatch", "editorFocus");
bind(
  "ctrl+shift+d",
  "editor.action.addSelectionToPreviousFindMatch",
  "editorFocus",
);
bind("alt+shift+d", "editor.action.selectHighlights", "editorFocus");
bind("alt+d", "cursorUndo", "textInputFocus");
