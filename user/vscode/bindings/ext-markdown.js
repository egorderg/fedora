const { bind_local } = require("../keymap");

bind_local(
  "p",
  "markdown.showPreview",
  "!notebookEditorFocused && editorLangId =~ /^(markdown|prompt|instructions|chatagent)$/",
);

bind_local(
  "4 p",
  "markdown.showPreviewToSide",
  "!notebookEditorFocused && editorLangId =~ /^(markdown|prompt|instructions|chatagent)$/",
);
