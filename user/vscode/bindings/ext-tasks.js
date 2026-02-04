const { bind_global } = require("../keymap");

bind_global("r r", "workbench.action.tasks.runTask");
bind_global("r shift+r", "workbench.action.tasks.reRunTask");
bind_global("r s", "workbench.action.tasks.showTasks");
bind_global("r d", "workbench.action.tasks.terminate");
