const { bind_global } = require("../keymap");

bind_global("b c", "copyFilePath", "editorFocus");
bind_global("b o", "revealFileInOS", "editorFocus");
bind_global(
  "b right",
  "workbench.action.moveEditorToRightGroup",
  "editorFocus",
);
bind_global("b left", "workbench.action.moveEditorToLeftGroup", "editorFocus");
bind_global(
  "b f",
  "editor.action.formatDocument",
  "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor",
);
bind_global(
  "b shift+f",
  "editor.action.formatDocument.multiple",
  "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor",
);
