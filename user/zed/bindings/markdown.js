const { all } = require("../keymap");

all("Markdown", (c) => {
  c.key("ctrl-c", "markdown::Copy");
});
