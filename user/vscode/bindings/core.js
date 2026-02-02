const { bind } = require("../keymap");

bind("escape", "editor.cancelOperation", "cancellableOperation");

bind("ctrl+shift+pageup", "workbench.action.navigateBack", "canNavigateBack");
bind(
  "ctrl+shift+pagedown",
  "workbench.action.navigateForward",
  "canNavigateForward",
);
bind(
  "ctrl+tab",
  "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
  "!activeEditorGroupEmpty",
);
bind(
  "ctrl+shift+tab",
  "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup",
  "!activeEditorGroupEmpty",
);

bind("alt+space", "workbench.action.showCommands");
bind("shift shift", "workbench.action.quickOpen");
bind("ctrl ctrl", "workbench.action.quickTextSearch");
