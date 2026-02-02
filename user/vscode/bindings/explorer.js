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
  "ctrl+f",
  "filesExplorer.findInFolder",
  "explorerResourceIsFolder && filesExplorerFocus && foldersViewVisible && !inputFocus",
);

// Global
bind_global(
  "e",
  "workbench.view.explorer",
  "viewContainer.workbench.view.explorer.enabled",
);
