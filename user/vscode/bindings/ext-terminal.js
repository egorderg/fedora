const { bind, bind_local, bind_global } = require("../keymap");

// Core
bind(
  "ctrl+w",
  "workbench.action.terminal.killEditor",
  "terminalEditorFocus && terminalFocus && terminalHasBeenCreated || terminalEditorFocus && terminalFocus && terminalProcessSupported",
);
bind(
  "ctrl+shift+c",
  "workbench.action.terminal.copySelection",
  "terminalTextSelectedInFocused || terminalFocus && terminalHasBeenCreated && terminalTextSelected || terminalFocus && terminalProcessSupported && terminalTextSelected || terminalFocus && terminalTextSelected && terminalTextSelectedInFocused || terminalHasBeenCreated && terminalTextSelected && terminalTextSelectedInFocused || terminalProcessSupported && terminalTextSelected && terminalTextSelectedInFocused",
);
bind(
  "ctrl+shift+v",
  "workbench.action.terminal.paste",
  "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported",
);

// Scrolling
bind(
  "pagedown",
  "workbench.action.terminal.scrollDownPage",
  "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive",
);
bind(
  "pageup",
  "workbench.action.terminal.scrollUpPage",
  "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive",
);
bind(
  "ctrl+down",
  "workbench.action.terminal.scrollDown",
  "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive",
);
bind(
  "ctrl+up",
  "workbench.action.terminal.scrollUp",
  "terminalFocusInAny && terminalHasBeenCreated && !terminalAltBufferActive || terminalFocusInAny && terminalProcessSupported && !terminalAltBufferActive",
);

// Find
bind(
  "ctrl+f",
  "workbench.action.terminal.focusFind",
  "terminalFindFocused && terminalHasBeenCreated || terminalFindFocused && terminalProcessSupported || terminalFocusInAny && terminalHasBeenCreated || terminalFocusInAny && terminalProcessSupported",
);
bind(
  "escape",
  "workbench.action.terminal.hideFind",
  "terminalFindVisible && terminalFocusInAny && terminalHasBeenCreated || terminalFindVisible && terminalFocusInAny && terminalProcessSupported",
);
bind(
  "enter",
  "workbench.action.terminal.findNext",
  "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported",
);
bind(
  "shift+enter",
  "workbench.action.terminal.findPrevious",
  "terminalFindInputFocused && terminalHasBeenCreated || terminalFindInputFocused && terminalProcessSupported",
);

bind_local(
  "r",
  "workbench.action.terminal.runRecentCommand",
  "accessibilityModeEnabled && terminalFocus && terminalHasBeenCreated || accessibilityModeEnabled && terminalFocus && terminalProcessSupported || accessibilityModeEnabled && accessibleViewIsShown && terminalHasBeenCreated && accessibleViewCurrentProviderId == 'terminal' || accessibilityModeEnabled && accessibleViewIsShown && terminalProcessSupported && accessibleViewCurrentProviderId == 'terminal'",
);

bind_local("n", "workbench.action.terminal.rename", "terminalEditorFocus");

bind_global("t", "workbench.action.createTerminalEditor");
bind_global("4 t", "workbench.action.createTerminalEditorSide");
bind_global("5 t", "workbench.action.terminal.newInNewWindow");
