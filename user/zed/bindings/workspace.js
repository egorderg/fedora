const { all } = require("../keymap");

all("Workspace", (c) => {
  c.key("f1", "command_palette::Toggle");
});
