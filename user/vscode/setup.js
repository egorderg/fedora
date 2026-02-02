const fs = require("node:fs");
const keymap = require("./keymap");

// TODO: improve local bindings -> use always alt for local bindings and never elsewheres

// TODO
// improve file names -> bundle names together like core-buffer.js or ft-diff.js
// remove last system keybindings
// there are many more quick pickers -> validate with shift shift and then type ? to see all -> put this also into alt-h
// open project with new window
// tab/buffer features -> right click on a tab
// format/format with?
// file management
// lsp rename and other lsp stuff like hover and code actions -> validate with rigth click
// scroll in autocomplete the docs -> checkout with window.title
// close signature/hover when typing
// git -> check with when if its active
// terminal
// picker opens item always in the first window
// search/replace use new tab
// ai chat use new tab and inline -> ctrl+i? and agent management with history ... -> check with quick pickers
// follow link -> search editor open file from key
// git -> check with when if its active
// git undo last commit
// git open changes
// git commit has a buffer!!!! Git Commit
// git cherry-pick
// snippets -> there is a snippets picker -> also snippet expand and there is a quick picker to select a snippet
// maybe no quickfix like list -> tasks should feed problems
// there is a show running tasks quick pick and terminate task -> ctrl+t?
// change cases
// create search and terminal always in the current window, use A-x 4 to create it to the right
// alt+x h k to open the keyshortcuts fast
// create the same bindings of the findWidth also for the search editor

// generate a readme for the keymap. use title for the title

// shift + enter is break line

// ctrl+ctrl to switch layouts
// extensions should handle multi layouts that can be switched via a quick pick
// maybe create actions like open search or terminal in desired layout
// create multiple layouts like Terminals, Tasks, Search, Docs, Mains
// run tasks in editor view?
// create fast docs management and a dashboard with a docs file that should be loaded
// writeable search editor with apply changes
// problems view as editor -> maybe put it inside layout -> Problems
// also a buffer list with all open editors would be neat -> put it also inside a layout?

// shift shift has many recent opened files. It looks like its some kind of buffer that are sometimes saved
// validate how shift shift shows only open buffer and then search files
// maybe create a custom quick picker where buffers are grouped first like in "edt" and when typing search for files
// check if you can add a keybinding to close buffers from this list

const bindingFiles = [
  "./bindings/core.js",
  "./bindings/core-help.js",
  "./bindings/edt-core.js",
  "./bindings/edt-ext.js",
  "./bindings/edt-multi-cursor.js",
  "./bindings/edt-completion.js",
  "./bindings/edt-lsp.js",
  "./bindings/edt-ext.js",
  "./bindings/edt-buffer.js",
  "./bindings/open.js",
  "./bindings/find.js",
  "./bindings/window.js",
  "./bindings/picker.js",
  "./bindings/explorer.js",
  "./bindings/git.js",
  "./bindings/ai.js",
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
