const { all } = require("../keymap");

all(null, (c) => {
  c.key("escape", "menu::Cancel");
  c.key("enter", "menu::Confirm");
  c.key("ctrl-enter", "menu::SecondaryConfirm");
  c.key("alt-enter", ["picker::ConfirmInput", { secondary: false }]);

  c.key("up", "menu::SelectPrevious");
  c.key("down", "menu::SelectNext");

  c.key("ctrl-=", ["zed::IncreaseBufferFontSize", { persist: false }]);
  c.key("ctrl-+", ["zed::IncreaseBufferFontSize", { persist: false }]);
  c.key("ctrl--", ["zed::DecreaseBufferFontSize", { persist: false }]);

  c.key("shift-escape", "workspace::ToggleZoom");
});

all("Picker || menu", (c) => {
  c.key("up", "menu::SelectPrevious");
  c.key("down", "menu::SelectNext");
});

all("menu", (c) => {
  c.key("left", "menu::SelectParent");
  c.key("right", "menu::SelectChild");
});
