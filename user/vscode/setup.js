const fs = require("node:fs");
const keymap = require("./keymap");

const bindingFiles = [
  "./bindings/core.js",
  "./bindings/core-list.js",
  "./bindings/core-picker.js",
  "./bindings/core-movement.js",
  "./bindings/core-editing.js",
  "./bindings/core-multi-cursor.js",
  "./bindings/core-lsp.js",
  "./bindings/core-buffer.js",
  "./bindings/core-window.js",
  "./bindings/ext-explorer.js",
  "./bindings/ext-open.js",
  "./bindings/ext-find.js",
  "./bindings/ext-terminal.js",
  "./bindings/ext-markdown.js",
  "./bindings/ext-git.js",
  "./bindings/ext-help.js",
];

const globalRawBindings = fs.readFileSync("./bindings/_default.json");
const globalBindings = JSON.parse(globalRawBindings);
let newBindings = [];

for (const binding of globalBindings) {
  newBindings.push({
    key: binding.key,
    command: `-${binding.command}`,
    when: binding.when,
  });
}

for (const file of bindingFiles) {
  require(file);
}

newBindings = newBindings.concat(keymap.bindings);

fs.writeFileSync(
  "./out/keybindings.json",
  JSON.stringify(newBindings, null, 2),
);
