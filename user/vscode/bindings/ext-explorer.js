const { bind, bind_global } = require("../keymap");

bind(
  "escape",
  "filesExplorer.cancelCut",
  "explorerResourceCut && filesExplorerFocus && foldersViewVisible && !inputFocus",
);
bind(
  "delete",
  "deleteFile",
  "filesExplorerFocus && foldersViewVisible && !explorerResourceMoveableToTrash && !inputFocus",
);
bind(
  "delete",
  "moveFileToTrash",
  "explorerResourceMoveableToTrash && filesExplorerFocus && foldersViewVisible && !inputFocus",
);
bind(
  "f2",
  "renameFile",
  "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus",
);
bind(
  "ctrl+x",
  "filesExplorer.cut",
  "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus",
);
bind(
  "ctrl+c",
  "filesExplorer.copy",
  "filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !inputFocus",
);
bind(
  "ctrl+v",
  "filesExplorer.paste",
  "filesExplorerFocus && foldersViewVisible && !explorerResourceReadonly && !inputFocus",
);
bind(
  "ctrl+shift+f",
  "filesExplorer.findInFolder",
  "explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus",
);

// Global
bind_global(
  "e e",
  "workbench.view.explorer",
  "viewContainer.workbench.view.explorer.enabled",
);
bind_global(
  "e b",
  "workbench.files.action.showActiveFileInExplorer",
  "viewContainer.workbench.view.explorer.enabled && editorFocus",
);
