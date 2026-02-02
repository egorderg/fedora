const { bind, bind_global } = require("../keymap");

// Editor
bind(
  "escape",
  "closeFindWidget",
  "editorFocus && findWidgetVisible && !isComposing",
);
bind(
  "enter",
  "editor.action.nextMatchFindAction",
  "editorFocus && findInputFocussed",
);
bind(
  "shift+enter",
  "editor.action.previousMatchFindAction",
  "editorFocus && findInputFocussed",
);
bind(
  "enter",
  "editor.action.replaceOne",
  "editorFocus && findWidgetVisible && replaceInputFocussed",
);
bind(
  "ctrl+alt+enter",
  "editor.action.replaceAll",
  "editorFocus && findWidgetVisible",
);
bind(
  "alt+enter",
  "editor.action.selectAllMatches",
  "editorFocus && findWidgetVisible",
);
bind("alt+c", "toggleFindCaseSensitive", "editorFocus && findInputFocussed");
bind("alt+s", "toggleFindInSelection", "editorFocus && findInputFocussed");
bind("alt+r", "toggleFindRegex", "editorFocus && findInputFocussed");
bind("alt+w", "toggleFindWholeWord", "editorFocus && findInputFocussed");
bind("alt+p", "togglePreserveCase", "editorFocus && replaceInputFocussed");
bind("ctrl+f", "actions.find", "editorFocus");
bind("ctrl+r", "editor.action.startFindReplaceAction", "editorFocus");

// Global
bind_global("f g", "search.action.openNewEditorToSide");
bind_global("f f", "workbench.action.quickTextSearch");
