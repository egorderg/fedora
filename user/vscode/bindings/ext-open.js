const { bind_global } = require("../keymap");

bind_global("o o", "workbench.action.openRecent");
bind_global("o f", "workbench.action.files.openFile");
bind_global("o d", "workbench.action.files.openFolder");

bind_global("5 o f", "workbench.action.files.openFileInNewWindow");
bind_global("5 o d", "workbench.action.files.openFolderInNewWindow");
