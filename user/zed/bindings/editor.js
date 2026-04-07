const { all } = require("../keymap");

all("Editor", (c) => {
  c.key("escape", "editor::Cancel");

  c.key("up", "editor::MoveUp");
  c.key("down", "editor::MoveDown");
  c.key("left", "editor::MoveLeft");
  c.key("right", "editor::MoveRight");

  c.key("delete", "editor::Delete");
  c.key("backspace", "editor::Backspace");
  c.key("ctrl-backspace", "editor::DeleteToPreviousWordStart");
  c.key("tab", "editor::Tab");
  c.key("shift-tab", "editor::Backtab");

  c.key("ctrl-left", "editor::MoveToPreviousWordStart");
  c.key("ctrl-right", "editor::MoveToNextWordEnd");

  c.key("shift-up", "editor::SelectUp");
  c.key("shift-down", "editor::SelectDown");
  c.key("shift-left", "editor::SelectLeft");
  c.key("shift-right", "editor::SelectRight");
  c.key("ctrl-shift-left", "editor::SelectToPreviousWordStart");
  c.key("ctrl-shift-right", "editor::SelectToNextWordEnd");

  c.key("alt-left", [
    "editor::MoveToBeginningOfLine",
    { stop_at_soft_wraps: true, stop_at_indent: true },
  ]);
  c.key("alt-shift-left", [
    "editor::SelectToBeginningOfLine",
    { stop_at_soft_wraps: true, stop_at_indent: true },
  ]);
  c.key("alt-right", ["editor::MoveToEndOfLine", { stop_at_soft_wraps: true }]);
  c.key("alt-shift-right", [
    "editor::SelectToEndOfLine",
    { stop_at_soft_wraps: true },
  ]);
  c.key("alt-up", "editor::MoveToBeginning");
  c.key("alt-shift-up", "editor::SelectToBeginning");
  c.key("alt-down", "editor::MoveToEnd");
  c.key("alt-shift-down", "editor::SelectToEnd");
});

all("Editor", (c) => {
  c.key("ctrl-z", "editor::Undo");
  c.key("ctrl-shift-z", "editor::Redo");

  c.key("ctrl-a", "editor::SelectAll");
  c.key("ctrl-x", "editor::Cut");
  c.key("ctrl-c", "editor::Copy");
  c.key("ctrl-v", "editor::Paste");

  c.key("ctrl-b", "editor::HalfPageDown");
  c.key("ctrl-shift-b", "editor::HalfPageUp");
  c.key("ctrl-l", "editor::ScrollCursorCenter");
  c.key("ctrl-shift-l", "editor::ScrollCursorTop");

  c.key("ctrl-g", "go_to_line::Toggle");
});

all("Editor && mode == full", (c) => {
  c.key("enter", "editor::Newline");
  c.key("shift+enter", "editor::NewlineBelow");
  c.key("ctrl+shift+enter", "editor::NewlineAbove");

  c.key("ctrl+f", "buffer_search::Deploy");
  c.key("ctrl+shift+f", "buffer_search::DeployReplace");
});

all("Editor && mode == auto_height", (c) => {
  c.key("shift-enter", "editor::NewlineBelow");
});

// // TODO: Move away
// c.key("ctrl-s", "workspace::SaveAll");
