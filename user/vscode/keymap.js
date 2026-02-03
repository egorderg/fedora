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

/**
 * Register a keybinding.
 * @param {string} key - Key combination string.
 * @param {string} command - Command identifier.
 * @param {string|undefined} when - Context expression; empty string becomes undefined.
 * @param {object} args - Optional command arguments.
 * @returns {void}
 */
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

/**
 * Register a keybinding with the global prefix.
 * @param {string} key - Key combination string without prefix.
 * @param {string} command - Command identifier.
 * @returns {void}
 */
export function bind_global(key, command) {
  bind(`${GLOBAL_PREFIX} ${key}`, command);
}

/**
 * Register a keybinding with the local prefix.
 * @param {string} key - Key combination string without prefix.
 * @param {string} command - Command identifier.
 * @param {string|undefined} when - Context expression; empty string becomes undefined.
 * @returns {void}
 */
export function bind_local(key, command, when) {
  bind(`${LOCAL_PREFIX}+${key}`, command, when);
}
