const { bind_local, bind_global } = require("../keymap");

bind_local(
  "up",
  "workbench.action.compareEditor.previousChange",
  "textCompareEditorActive",
);
bind_local(
  "down",
  "workbench.action.compareEditor.nextChange",
  "textCompareEditorActive",
);

bind_local("s", "git.diff.stageHunk", "textCompareEditorActive");
bind_local("r", "diffEditor.revert", "textCompareEditorActive");

bind_global("g b", "git.checkout", "editorTextFocus && !editorReadonly");
bind_global("g d", "git.openChange", "editorTextFocus && !editorReadonly");
