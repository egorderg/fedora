const fs = require("node:fs");
const keymap = require("./keymap");

// TODO
// markdown editor
// create the same bindings of the find also for the search editor
// ai chat use new tab and inline -> ctrl+i? and agent management with history ... -> check with quick pickers
// remove last system keybindings
// iterate all open todos
// git -> check with when if its active
// git undo last commit
// git open changes
// git commit has a buffer!!!! Git Commit
// git cherry-pick
// snippets -> there is a snippets picker -> also snippet expand and there is a quick picker to select a snippet
// there is a show running tasks quick pick and terminate task -> ctrl+t? or alt+x t

// generate a readme for the keymap. use title for the title

// ctrl+ctrl to switch layouts
// extensions should handle multi layouts that can be switched via a quick pick
// maybe create actions like open search or terminal in desired layout
// create multiple layouts like Terminals, Tasks, Search, Docs, Mains
// run tasks in editor view?
// create fast docs management and a dashboard with a docs file that should be loaded
// writeable search editor with apply changes
// problems view as editor -> maybe put it inside layout -> Problems
// also a buffer list with all open editors would be neat -> put it also inside a layout?
// show also after the buffers a list with open windows also with the ability to close them -> remove w w binding in core-window.js
// create a todo scan task which feeds the problems tab

// shift shift has many recent opened files. It looks like its some kind of buffer that are sometimes saved
// validate how shift shift shows only open buffer and then search files
// maybe create a custom quick picker where buffers are grouped first like in "edt" and when typing search for files
// check if you can add a keybinding to close buffers from this list
// create a custom open recent quick pick where only folders are visible with a extra command to open it in a new window

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
  "./bindings/ext-git.js",
  "./bindings/ext-ai.js",
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
