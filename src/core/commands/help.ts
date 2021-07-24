import { Message, MessageEmbed } from "discord.js";
import { Command } from "../types/command";

const command: Command = {
  name: "help",

  execute(message: Message) {
    const helpEmbed = new MessageEmbed().setAuthor("Command List")
      .setDescription(`Here is the list of commands!
      For more info on a specific command, use \`ww help <command>\``);

    return message.reply(helpEmbed);
  },
};

export default command;
