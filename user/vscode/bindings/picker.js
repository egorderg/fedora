const { bind } = require("../keymap");

bind("escape", "workbench.action.closeQuickOpen", "inQuickOpen");
bind(
  "enter",
  "quickInput.accept",
  "inQuickInput && !isComposing && quickInputType != 'quickWidget'",
);
bind(
  "ctrl+enter",
  "quickInput.acceptInBackground",
  "cursorAtEndOfQuickInputBox && inQuickInput && quickInputType == 'quickPick' || inQuickInput && !inputFocus && quickInputType == 'quickPick'",
);
bind(
  "ctrl+home",
  "quickInput.first",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
bind(
  "ctrl+end",
  "quickInput.last",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
bind(
  "down",
  "quickInput.next",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
bind(
  "up",
  "quickInput.previous",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
bind(
  "ctrl+down",
  "quickInput.nextSeparator",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
bind(
  "ctrl+up",
  "quickInput.previousSeparator",
  "inQuickInput && quickInputType == 'quickPick' || inQuickInput && quickInputType == 'quickTree'",
);
