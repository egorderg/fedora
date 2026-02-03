const { bind } = require("../keymap");

bind("escape", "editor.cancelOperation", "cancellableOperation");

bind("ctrl+shift+pagedown", "workbench.action.navigateBack", "canNavigateBack");
bind(
  "ctrl+shift+pageup",
  "workbench.action.navigateForward",
  "canNavigateForward",
);
bind(
  "ctrl+pagedown",
  "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
  "!activeEditorGroupEmpty",
);
bind(
  "ctrl+pagedown",
  "workbench.action.quickOpenNavigateNextInEditorPicker",
  "inEditorsPicker && inQuickOpen",
);
bind(
  "ctrl+pageup",
  "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
  "!activeEditorGroupEmpty",
);
bind(
  "ctrl+pageup",
  "workbench.action.quickOpenNavigatePreviousInEditorPicker",
  "inEditorsPicker && inQuickOpen",
);

bind("f12", "workbench.action.showCommands");
bind("shift shift", "workbench.action.quickOpen");
