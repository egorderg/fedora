const { bind, bind_local, bind_global } = require("../keymap");

// Single Diff
bind_local(
  "up",
  "workbench.action.compareEditor.previousChange",
  "textCompareEditorActive",
);
bind_local(
  "down",
  "workbench.action.compareEditor.nextChange",
  "textCompareEditorActive",
);

// Multi Diff
bind_local(
  "up",
  "multiDiffEditor.goToPreviousChange",
  "activeEditor == 'multiDiffEditor'",
);
bind_local(
  "down",
  "multiDiffEditor.goToNextChange",
  "activeEditor == 'multiDiffEditor'",
);

// Core
bind("ctrl+alt+enter", "git.commitMessageAccept", "editorTextFocus");
bind_local(
  "shift+s",
  "git.stageFile",
  "textCompareEditorActive || activeEditor == 'multiDiffEditor'",
);
bind_local(
  "s",
  "git.diff.stageHunk",
  "textCompareEditorActive || activeEditor == 'multiDiffEditor'",
);
bind_local(
  "r",
  "diffEditor.revert",
  "textCompareEditorActive || activeEditor == 'multiDiffEditor'",
);
bind_local(
  "shift+r",
  "git.clean",
  "textCompareEditorActive || activeEditor == 'multiDiffEditor'",
);

bind_global("g d", "git.openChange", "editorTextFocus && !editorReadonly");
bind_global("g b", "git.checkout");
bind_global("g shift+b", "git.deleteBranch");
bind_global("g g", "git.viewChanges");
bind_global("g shift+g", "git.viewStagedChanges");
bind_global("g f", "git.fetch");
bind_global("g c", "git.commitStaged");
bind_global("g p", "git.pull");
bind_global("g shift+p", "git.push");

// Worktree
bind_global("g w c", "git.createWorktree");
bind_global("g w d", "git.deleteWorktree");
bind_global("g w m", "git.migrateWorktreeChanges");
