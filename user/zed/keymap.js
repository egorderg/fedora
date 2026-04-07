const GLOBAL_PREFIX = "alt+x";
const LOCAL_PREFIX = "alt";

export const maps = {};

export function all(context, mapper) {
  const bindings = {};

  mapper(createMapperContext(bindings));

  if (!Object.hasOwn(maps, context)) {
    maps[context] = {
      context: context == null ? undefined : context,
      bindings: {},
    };
  }

  maps[context].bindings = {
    ...maps[context].bindings,
    ...bindings,
  };
}

function createMapperContext(bindings) {
  return {
    key(key, command) {
      bindings[key] = command;
    },
    global(key, command) {
      bindings[`${GLOBAL_PREFIX} ${key}`] = command;
    },
    local(key, command) {
      bindings[`${LOCAL_PREFIX}+${key}`] = command;
    },
  };
}
