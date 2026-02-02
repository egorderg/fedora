const { bind } = require("../keymap");

bind("escape", "cancelSelection", "editorHasSelection && textInputFocus");
bind("ctrl+end", "cursorBottom", "textInputFocus");
bind("ctrl+shift+end", "cursorBottomSelect", "textInputFocus");
bind("down", "cursorDown", "textInputFocus");
bind("shift+down", "cursorDownSelect", "textInputFocus");
bind("end", "cursorEnd", "textInputFocus");
bind("shift+end", "cursorEndSelect", "textInputFocus");
bind("home", "cursorHome", "textInputFocus");
bind("shift+home", "cursorHomeSelect", "textInputFocus");
bind("left", "cursorLeft", "textInputFocus");
bind("shift+left", "cursorLeftSelect", "textInputFocus");
bind("pagedown", "editorScroll", "textInputFocus", {
  to: "down",
  by: "halfPage",
});
bind("pageup", "editorScroll", "textInputFocus", {
  to: "up",
  by: "halfPage",
});
bind("right", "cursorRight", "textInputFocus");
bind("shift+right", "cursorRightSelect", "textInputFocus");
bind("ctrl+home", "cursorTop", "textInputFocus");
bind("ctrl+shift+home", "cursorTopSelect", "textInputFocus");
bind("up", "cursorUp", "textInputFocus");
bind("shift+up", "cursorUpSelect", "textInputFocus");
bind("ctrl+right", "cursorWordEndRight", "textInputFocus");
bind("ctrl+shift+right", "cursorWordEndRightSelect", "textInputFocus");
bind("ctrl+left", "cursorWordLeft", "textInputFocus");
bind("ctrl+shift+left", "cursorWordLeftSelect", "textInputFocus");
bind("ctrl+down", "scrollLineDown", "textInputFocus");
bind("ctrl+up", "scrollLineUp", "textInputFocus");
bind("backspace", "deleteLeft", "textInputFocus");
bind("ctrl+backspace", "deleteWordLeft", "textInputFocus && !editorReadonly");
bind(
  "ctrl+shift+backspace",
  "deleteWordRight",
  "textInputFocus && !editorReadonly",
);
bind("delete", "deleteRight", "textInputFocus");
bind(
  "tab",
  "tab",
  "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
);
bind(
  "shift+tab",
  "outdent",
  "editorTextFocus && !editorReadonly && !editorTabMovesFocus",
);
bind(
  "ctrl+enter",
  "editor.action.insertLineAfter",
  "editorTextFocus && !editorReadonly",
);
bind(
  "ctrl+shift+enter",
  "editor.action.insertLineBefore",
  "editorTextFocus && !editorReadonly",
);
