const { bind_global } = require("../keymap");

// Global
bind_global("f f", "workbench.action.quickTextSearch");
bind_global("f g", "search.action.openNewEditor");
bind_global("4 f g", "search.action.openNewEditorToSide");
