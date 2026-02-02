const GLOBAL_PREFIX = "alt+x";
const LOCAL_PREFIX = "alt";
const allowedDuplicates = [
  "escape",
  "enter",
  "ctrl+enter",
  "shift+enter",
  "alt+enter",
  "ctrl+alt+enter",
  "ctrl+space",
  "delete",
  "down",
  "up",
  "ctrl+w",
  "ctrl+down",
  "ctrl+up",
  "ctrl+home",
  "ctrl+end",
  "pagedown",
  "pageup",
  "ctrl+pagedown",
  "ctrl+pageup",
  "tab",
  "shift+tab",
  "f2",
  "ctrl+x",
  "ctrl+c",
  "ctrl+v",
  "ctrl+f",
];

export const bindings = [];
const bindingsMap = new Set();

export function bind(key, command, when, args) {
  const normalizedWhen = when === "" ? undefined : when;

  bindings.push({
    key,
    command,
    args,
    when: normalizedWhen,
  });

  if (bindingsMap.has(key) && !allowedDuplicates.includes(key)) {
    console.warn(`Keymap: duplicated key '${key}' - '${command}'`);
    return;
  }

  bindingsMap.add(key);
}

export function bind_global(key, command) {
  bind(`${GLOBAL_PREFIX} ${key}`, command);
}

export function bind_local(key, command, when) {
  bind(`${LOCAL_PREFIX}+${key}`, command, when);
}
