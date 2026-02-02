const fs = require("node:fs");

const bindingFiles = [
  "./bindings/core.json",
  "./bindings/edt-core.json",
  "./bindings/edt-ext.json",
  "./bindings/edt-multi-cursor.json",
  "./bindings/edt-completion.json",
  "./bindings/find.json",
  "./bindings/window.json",
  "./bindings/picker.json",
  "./bindings/explorer.json",
  "./bindings/git.json",
  "./bindings/ai.json",
];

for (const file of bindingFiles) {
  const raw = fs.readFileSync(file);
  const bindings = JSON.parse(raw);
  let content = 'const { bind } = require("../keymap");\n\n';

  for (const binding of bindings) {
    content += `bind("${binding.key}", "${binding.command}", "${binding.when ?? ""}")\n`;
  }

  content += "\n";

  fs.writeFileSync(file.replace(".json", ".js"), content);
}
