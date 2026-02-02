const { bind } = require("../keymap");

bind(
  "escape",
  "list.clear",
  "listFocus && listHasSelectionOrFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "down",
  "list.focusDown",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "up",
  "list.focusUp",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "shift+down",
  "list.expandSelectionDown",
  "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused",
);
bind(
  "shift+up",
  "list.expandSelectionUp",
  "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused",
);
bind(
  "left",
  "list.collapse",
  "listFocus && treeElementCanCollapse && !inputFocus && !treestickyScrollFocused || listFocus && treeElementHasParent && !inputFocus && !treestickyScrollFocused",
);
bind(
  "ctrl+left",
  "list.collapseAll",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "right",
  "list.expand",
  "listFocus && treeElementCanExpand && !inputFocus && !treestickyScrollFocused || listFocus && treeElementHasChild && !inputFocus && !treestickyScrollFocused",
);
bind(
  "home",
  "list.focusFirst",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "end",
  "list.focusLast",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
bind(
  "ctrl+a",
  "list.selectAll",
  "listFocus && listSupportsMultiselect && !inputFocus && !treestickyScrollFocused",
);
bind(
  "enter",
  "list.select",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);

// Find
bind("escape", "list.closeFind", "listFocus && treeFindOpen");
bind("ctrl+f", "list.find", "listFocus && listSupportsFind");

// Hover
bind(
  "f1",
  "list.showHover",
  "listFocus && !inputFocus && !treestickyScrollFocused",
);
