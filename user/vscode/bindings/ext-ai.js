const { bind, bind_local, bind_global } = require("../keymap");

bind(
  "escape",
  "workbench.edit.chat.cancel",
  "chatSessionCurrentlyEditing && inChatInput && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible || chatSessionCurrentlyEditingInput && inChatInput && !editorHasMultipleSelections && !editorHasSelection && !editorHoverVisible",
);
bind("ctrl+escape", "workbench.action.chat.cancel");
bind(
  "enter",
  "workbench.action.chat.submit",
  "chatInputHasText && inChatInput && !chatSessionRequestInProgress && !withinEditSessionDiff",
);

// Inline
bind(
  "escape",
  "inlineChat.close",
  "inlineChatHasNotebookInline && inlineChatVisible && activeEditor == 'workbench.editor.notebook'",
);
bind(
  "escape",
  "inlineChat2.close",
  "chatInputHasFocus && inlineChatHasEditsAgent && inlineChatVisible || chatInputHasFocus && inlineChatHasNotebookAgent && inlineChatVisible && activeEditor == 'workbench.editor.notebook' || editorFocus && inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.hasEditorModifications || editorFocus && inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.hasEditorModifications && activeEditor == 'workbench.editor.notebook'",
);
bind(
  "ctrl+i",
  "inlineChat.start",
  "editorFocus && inlineChatHasEditsAgent && inlineChatPossible && !editorReadonly && !editorSimpleInput || editorFocus && inlineChatHasNotebookAgent && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor == 'workbench.editor.notebook' || editorFocus && inlineChatHasNotebookInline && inlineChatPossible && !editorReadonly && !editorSimpleInput && activeEditor == 'workbench.editor.notebook'",
);
bind(
  "ctrl+z",
  "inlineChat.unstash",
  "inlineChatHasStashedSession && !editorReadonly",
);
bind(
  "enter",
  "inlineChat2.keep",
  "chatEdits.hasEditorModifications && chatInputHasFocus && inlineChatHasEditsAgent && inlineChatVisible && !chatEdits.isRequestInProgress && !chatInputHasText || chatEdits.hasEditorModifications && chatInputHasFocus && inlineChatHasNotebookAgent && inlineChatVisible && !chatEdits.isRequestInProgress && !chatInputHasText && activeEditor == 'workbench.editor.notebook'",
);
// inlineChat.regenerate
// inlineChat.moveTo

bind_local(
  "m",
  "workbench.action.chat.openModelPicker",
  "chatIsEnabled && inChatInput",
);
bind_local(
  "c",
  "workbench.action.chat.attachContext",
  "inChatInput && inChatInput",
);
bind_local(
  "a",
  "workbench.action.chat.openModePicker",
  "chatIsEnabled && inChatInput",
);
bind_local(
  "t",
  "workbench.action.chat.configureTools",
  "chatIsEnabled && inChatInput",
);

bind_global("i", "workbench.action.openChat", "chatIsEnabled");
bind_global("5 i", "workbench.action.newChatWindow", "chatIsEnabled");
