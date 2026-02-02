const { bind, bind_global } = require("../keymap");

bind("ctrl+w", "workbench.action.closeActiveEditor");
bind("ctrl+shift+w", "workbench.action.reopenClosedEditor");
bind("alt+1", "workbench.action.focusFirstEditorGroup");
bind("alt+2", "workbench.action.focusSecondEditorGroup");
bind("alt+3", "workbench.action.focusThirdEditorGroup");
bind("alt+4", "workbench.action.focusFourthEditorGroup");
bind("alt+5", "workbench.action.focusFifthEditorGroup");
bind("alt+6", "workbench.action.focusSixthEditorGroup");
bind("alt+7", "workbench.action.focusSeventhEditorGroup");
bind("alt+8", "workbench.action.focusEighthEditorGroup");
bind("alt+9", "workbench.action.focusNinthEditorGroup");

bind_global("0", "workbench.action.closeEditorsInGroup");
bind_global("1", "workbench.action.closeEditorsInOtherGroups");
bind_global("2", "workbench.action.splitEditorDown");
bind_global("3", "workbench.action.splitEditor");
bind_global(
  "=",
  "workbench.action.toggleMaximizeEditorGroup",
  "editorPartMaximizedEditorGroup || editorPartMultipleEditorGroups",
);
bind_global("w a", "workbench.action.toggleActivityBarVisibility");
bind_global("w p", "workbench.action.togglePanel");
bind_global("w s", "workbench.action.toggleSidebarVisibility");
