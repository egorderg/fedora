const { bind, bind_local, bind_global } = require("../keymap");

bind("escape", "search.action.focusQueryEditorWidget", "inSearchEditor");
bind_local(
  "down",
  "search.action.focusNextSearchResult",
  "hasSearchResult || inSearchEditor",
);
bind_local(
  "up",
  "search.action.focusPreviousSearchResult",
  "hasSearchResult || inSearchEditor",
);
bind_local("e", "increaseSearchEditorContextLines", "inSearchEditor");
bind_local("shift+e", "decreaseSearchEditorContextLines", "inSearchEditor");

bind_local("l", "toggleSearchEditorContextLines", "inSearchEditor");
bind_local("c", "toggleSearchEditorCaseSensitive", "inSearchEditor");
bind_local("r", "toggleSearchEditorRegex", "inSearchEditor");
bind_local("w", "toggleSearchEditorWholeWord", "inSearchEditor");

bind_global("f f", "workbench.action.quickTextSearch");
bind_global("f g", "search.action.openNewEditor");
bind_global("4 f g", "search.action.openNewEditorToSide");
