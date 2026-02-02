const { bind } = require("../keymap");

bind("ctrl+z", "undo");
bind("ctrl+shift+z", "redo");
bind("ctrl+a", "editor.action.selectAll", "!listFocus");
bind("ctrl+c", "editor.action.clipboardCopyAction");
bind("ctrl+x", "editor.action.clipboardCutAction");
bind("ctrl+v", "editor.action.clipboardPasteAction");
bind("ctrl+s", "workbench.action.files.saveFiles");
bind("ctrl+shift+s", "workbench.action.files.saveAs");

bind("ctrl+k", "deleteAllRight", "textInputFocus && !editorReadonly");
bind(
  "ctrl+shift+k",
  "editor.action.deleteLines",
  "textInputFocus && !editorReadonly",
);
bind("ctrl+j", "editor.action.joinLines", "editorTextFocus");
bind("ctrl+e", "editor.action.smartSelect.expand", "editorTextFocus");
bind("ctrl+shift+e", "editor.action.smartSelect.shrink", "editorTextFocus");
bind("ctrl+g", "workbench.action.gotoLine", "editorTextFocus");
bind("ctrl+o", "editor.action.openLink", "editorTextFocus");
bind(
  "ctrl ctrl",
  "workbench.action.gotoSymbol",
  "!accessibilityHelpIsShown && !accessibleViewIsShown",
);
bind("alt alt", "workbench.action.showAllSymbols");
bind(
  "ctrl+/",
  "editor.action.commentLine",
  "editorTextFocus && !editorReadonly",
);
bind(
  "ctrl+shift+/",
  "editor.action.blockComment",
  "editorTextFocus && !editorReadonly",
);
bind(
  "ctrl+`",
  "editor.action.transformToLowercase",
  "editorTextFocus && !editorReadonly",
);
bind(
  "ctrl+shift+`",
  "editor.action.transformToUppercase",
  "editorTextFocus && !editorReadonly",
);

// Find
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
bind("ctrl+f", "actions.find", "editorFocus && !listFocus");
bind(
  "ctrl+shift+f",
  "editor.action.startFindReplaceAction",
  "editorFocus && !listFocus",
);
