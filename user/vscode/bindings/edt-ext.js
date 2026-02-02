const { bind } = require("../keymap");

// TODO: -> maybe move to something core?
bind("ctrl+z", "undo");
bind("ctrl+shift+z", "redo");
bind("ctrl+a", "editor.action.selectAll");
bind("ctrl+c", "editor.action.clipboardCopyAction");
bind("ctrl+x", "editor.action.clipboardCutAction");
bind("ctrl+v", "editor.action.clipboardPasteAction");

// TODO: -> maybe move to something core?
bind("ctrl+shift+o", "workbench.action.showAllSymbols");
bind("ctrl+s", "workbench.action.files.saveFiles");
bind("ctrl+shift+s", "workbench.action.files.saveAs");
bind("ctrl+g", "workbench.action.gotoLine");

bind("ctrl+k", "deleteAllRight", "textInputFocus && !editorReadonly");
bind(
  "ctrl+shift+k",
  "editor.action.deleteLines",
  "textInputFocus && !editorReadonly",
);
bind("ctrl+j", "editor.action.joinLines", "editorTextFocus");
bind("ctrl+e", "editor.action.smartSelect.expand", "editorTextFocus");
bind("ctrl+shift+e", "editor.action.smartSelect.shrink", "editorTextFocus");
bind("ctrl+l", "expandLineSelection", "textInputFocus");
bind(
  "ctrl ctrl",
  "workbench.action.gotoSymbol",
  "!accessibilityHelpIsShown && !accessibleViewIsShown",
);
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
