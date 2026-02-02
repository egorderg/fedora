const GLOBAL_PREFIX = "alt+x";
const LOCAL_PREFIX = "alt+c";

export const bindings = [];
const bindingsMap = new Map();

export function bind(key, command, when) {
  const normalizedWhen = when === "" ? undefined : when;

  bindings.push({
    key,
    command,
    when: normalizedWhen,
  });

  const internalWhen = bindingsMap.get(key);

  if (internalWhen != null && internalWhen === normalizedWhen) {
    console.warn(`Keymap: duplicated key '${key}' - '${internalWhen}'`);
    return;
  }

  bindingsMap.set(key, when);
}

export function bind_global(key, command) {
  bind(`${GLOBAL_PREFIX} ${key}`, command);
}

export function bind_local(key, command, when) {
  bind(`${LOCAL_PREFIX} ${key}`, command, when);
}
