const { bind, bind_global } = require("../keymap");

bind("ctrl+w", "workbench.action.closeActiveEditor");
bind(
  "ctrl+w",
  "workbench.action.closeGroup",
  "activeEditorGroupEmpty && multipleEditorGroups",
);
bind("ctrl+shift+w", "workbench.action.reopenClosedEditor");
bind("ctrl+1", "workbench.action.focusFirstEditorGroup");
bind("ctrl+2", "workbench.action.focusSecondEditorGroup");
bind("ctrl+3", "workbench.action.focusThirdEditorGroup");
bind("ctrl+4", "workbench.action.focusFourthEditorGroup");
bind("ctrl+5", "workbench.action.focusFifthEditorGroup");
bind("ctrl+6", "workbench.action.focusSixthEditorGroup");
bind("ctrl+7", "workbench.action.focusSeventhEditorGroup");
bind("ctrl+8", "workbench.action.focusEighthEditorGroup");
bind("ctrl+9", "workbench.action.focusNinthEditorGroup");
bind(
  "ctrl+=",
  "workbench.action.toggleMaximizeEditorGroup",
  "editorPartMaximizedEditorGroup || editorPartMultipleEditorGroups",
);

bind_global("0", "workbench.action.closeEditorsInGroup");
bind_global("1", "workbench.action.closeEditorsInOtherGroups");
bind_global("2", "workbench.action.splitEditorDown");
bind_global("3", "workbench.action.splitEditor");
bind_global("w a", "workbench.action.toggleActivityBarVisibility");
bind_global("w p", "workbench.action.togglePanel");
bind_global("w s", "workbench.action.toggleSidebarVisibility");
bind_global("w n", "workbench.action.newWindow");
