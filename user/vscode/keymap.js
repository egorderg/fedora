const GLOBAL_PREFIX = "alt+x";
const LOCAL_PREFIX = "alt";

export const bindings = [];

export function bind(key, command, when, args) {
  const normalizedWhen = when === "" ? undefined : when;

  bindings.push({
    key,
    command,
    args,
    when: normalizedWhen,
  });
}

export function bind_global(key, command) {
  bind(`${GLOBAL_PREFIX} ${key}`, command);
}

export function bind_local(key, command, when) {
  bind(`${LOCAL_PREFIX}+${key}`, command, when);
}
