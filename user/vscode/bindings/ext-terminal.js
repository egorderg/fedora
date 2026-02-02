const { bind, bind_local, bind_global } = require("../keymap");

// Close
bind(
  "ctrl+w",
  "workbench.action.terminal.killEditor",
  "terminalEditorFocus && terminalFocus && terminalHasBeenCreated",
);

// Scrolling
bind(
  "pagedown",
  "workbench.action.terminal.scrollDownPage",
  "terminalEditorFocus && terminalHasBeenCreated",
);
bind(
  "pageup",
  "workbench.action.terminal.scrollUpPage",
  "terminalEditorFocus && terminalHasBeenCreated",
);
bind(
  "ctrl+down",
  "workbench.action.terminal.scrollDown",
  "terminalEditorFocus && terminalHasBeenCreated",
);
bind(
  "ctrl+up",
  "workbench.action.terminal.scrollUp",
  "terminalEditorFocus && terminalHasBeenCreated",
);

// Find
bind(
  "ctrl+f",
  "workbench.action.terminal.focusFind",
  "terminalEditorFocus && terminalFocus && terminalHasBeenCreated",
);
bind(
  "escape",
  "workbench.action.terminal.hideFind",
  "terminalFindVisible && terminalFocusInAny && terminalHasBeenCreated",
);
bind(
  "enter",
  "workbench.action.terminal.findNext",
  "terminalFindFocused && terminalHasBeenCreated",
);
bind(
  "shift+enter",
  "workbench.action.terminal.findPrevious",
  "terminalFindFocused && terminalHasBeenCreated",
);

bind_local(
  "r",
  "workbench.action.terminal.runRecentCommand",
  "terminalEditorFocus && terminalFocus && terminalHasBeenCreated",
);

bind_local("n", "workbench.action.terminal.rename", "terminalEditorFocus");

bind_global("t", "workbench.action.createTerminalEditor");
bind_global("4 t", "workbench.action.createTerminalEditorSide");
bind_global("5 t", "workbench.action.terminal.newInNewWindow");
