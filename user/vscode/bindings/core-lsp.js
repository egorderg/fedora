const { bind } = require("../keymap");

// Completion
bind("escape", "hideSuggestWidget", "suggestWidgetVisible && textInputFocus");
bind("escape", "closeParameterHints", "editorFocus && parameterHintsVisible");
bind(
  "pagedown",
  "selectNextPageSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion",
);
bind(
  "down",
  "selectNextSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion",
);
bind(
  "pageup",
  "selectPrevPageSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion",
);
bind(
  "up",
  "selectPrevSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus || suggestWidgetVisible && textInputFocus && !suggestWidgetHasFocusedSuggestion",
);
bind(
  "tab",
  "selectNextSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
);
bind(
  "shift+tab",
  "selectPrevSuggestion",
  "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus",
);
bind(
  "enter",
  "acceptSelectedSuggestion",
  "acceptSuggestionOnEnter && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && suggestionMakesTextEdit && textInputFocus",
);
bind(
  "ctrl+space",
  "toggleSuggestionDetails",
  "suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus",
);
bind(
  "ctrl+space",
  "editor.action.triggerSuggest",
  "editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible",
);

// Code Actions
bind("escape", "hideCodeActionWidget", "codeActionMenuVisible");
bind("down", "selectNextCodeAction", "codeActionMenuVisible");
bind("up", "selectPrevCodeAction", "codeActionMenuVisible");
bind("tab", "selectNextCodeAction", "codeActionMenuVisible");
bind("shift+tab", "selectPrevCodeAction", "codeActionMenuVisible");
bind("enter", "acceptSelectedCodeAction", "codeActionMenuVisible");
bind(
  "alt+enter",
  "editor.action.quickFix",
  "editorHasCodeActionsProvider && textInputFocus && !editorReadonly",
);
bind(
  "ctrl+alt+enter",
  "editor.action.sourceAction",
  "editorHasCodeActionsProvider && textInputFocus && !editorReadonly",
);

// Hover
bind("f1", "editor.action.showHover", "editorTextFocus");

// Rename
bind("escape", "cancelRenameInput", "editorFocus && renameInputVisible");
bind(
  "f2",
  "editor.action.rename",
  "editorHasRenameProvider && editorTextFocus && !editorReadonly",
);
bind("down", "focusNextRenameSuggestion", "renameInputVisible");
bind("up", "focusPreviousRenameSuggestion", "renameInputVisible");
bind("tab", "focusNextRenameSuggestion", "renameInputVisible");
bind("shift+tab", "focusPreviousRenameSuggestion", "renameInputVisible");
bind(
  "enter",
  "acceptRenameInput",
  "editorFocus && renameInputVisible && !isComposing",
);
// bind(
//   "ctrl+enter",
//   "acceptRenameInputWithPreview",
//   "config.editor.rename.enablePreview && editorFocus && renameInputVisible && !isComposing",
// );

// Definition
bind(
  "escape",
  "closeReferenceSearch",
  "editorTextFocus && referenceSearchVisible && !config.editor.stablePeek || referenceSearchVisible && !config.editor.stablePeek && !inputFocus && !listMultiSelection && !treeFindOpen",
);
bind(
  "escape",
  "editor.closeCallHierarchy",
  "callHierarchyVisible && !config.editor.stablePeek && !listMultiSelection && !treeFindOpen",
);
bind(
  "escape",
  "editor.closeTypeHierarchy",
  "typeHierarchyVisible && !config.editor.stablePeek && !listMultiSelection && !treeFindOpen",
);
bind(
  "f5",
  "editor.action.revealDefinition",
  "editorHasDefinitionProvider && editorTextFocus",
);
bind(
  "f6",
  "editor.action.goToTypeDefinition",
  "editorHasDefinitionProvider && editorTextFocus",
);
bind(
  "f7",
  "editor.action.goToImplementation",
  "editorHasImplementationProvider && editorTextFocus",
);
bind(
  "f8",
  "editor.action.goToReferences",
  "editorHasReferenceProvider && editorTextFocus && !inReferenceSearchEditor && !isInEmbeddedEditor",
);
// bind(
//   "f9",
//   "editor.showCallHierarchy",
//   "editorHasCallHierarchyProvider && editorTextFocus && !inReferenceSearchEditor",
// );

// Problems
bind(
  "escape",
  "closeMarkersNavigation",
  "editorFocus && markersNavigationVisible",
);
bind("f3", "editor.action.marker.prevInFiles", "editorFocus");
bind("f4", "editor.action.marker.nextInFiles", "editorFocus");
