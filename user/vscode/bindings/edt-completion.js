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
