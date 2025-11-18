import { Command } from "commander";
import { registerCommands } from "./commands/index.js";

const plugin = {
  name: "plugin-backlinks",
  version: "0.1.0",
  install(cli: Command) {
    let toolsCmd = cli.commands.find(cmd => cmd.name() === "tools");
    if (!toolsCmd) toolsCmd = cli.command("tools");

    let cmd = toolsCmd.commands.find(cmd => cmd.name() === "plugin-backlinks");
    if (!cmd) cmd = toolsCmd.command("plugin-backlinks");

    registerCommands(cmd, { prefix: "", plugin: "plugin-backlinks" });
  },
};

export default plugin;
