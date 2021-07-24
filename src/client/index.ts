import { Client, Collection, Message } from "discord.js-light";
import { readdirSync } from "fs";
import { join } from "path";

import { Command } from "./types/command";

export class WerewolfClient {
  commands: Collection<string, Command> = new Collection();
  client: Client;

  constructor() {
    this.client = new Client({
      disableMentions: "everyone",
    });

    this.client.on("ready", this.ready);
    this.client.on("message", this.handleMessage);

    this.setup();
  }

  handleMessage = (message: Message) => {
    if (message.author.bot) return;

    const prefix = process.env.PREFIX || "ww";
    const content = message.content.toLowerCase();

    if (!content.startsWith(prefix)) return;

    const [, commandName, ...args] = message.content.toLowerCase().split(" ");

    if (!commandName) return;
    const command =
      this.commands.get(commandName) ||
      this.commands.find((cmd) => cmd.alias && cmd.alias.includes(commandName));

    console.log(this.commands);

    if (!command) return;

    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
    }
  };

  ready = () => {
    console.log(
      `[READY] Bot is online and ready in ${this.client.guilds.cache.size} guild(s)!`
    );
  };

  async setup() {
    const commandFiles = readdirSync(join(__dirname, "commands"));

    for (const file of commandFiles) {
      const commandFile = await import(join(__dirname, "commands", `${file}`));
      const command = commandFile.default;
      this.commands.set(command.name, command);
    }
  }

  async start(token: string) {
    this.client.login(token);
  }
}
