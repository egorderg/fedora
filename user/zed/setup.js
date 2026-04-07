const fs = require("node:fs");
const keymap = require("./keymap");

const bindingFiles = [
  "./bindings/menu.js",
  "./bindings/workspace.js",
  "./bindings/editor.js",
  "./bindings/markdown.js",
];

// TODO: back/forth

let newMaps = [];

for (const file of bindingFiles) {
  require(file);
}

newMaps = newMaps.concat(Object.values(keymap.maps));

fs.writeFileSync("./out/keymap.json", JSON.stringify(newMaps, null, 2));
