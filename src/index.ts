require("dotenv").config();

import { WerewolfClient } from "./client";

async function main() {
  const client = new WerewolfClient();

  client.start(process.env.DISCORD_TOKEN);
}

main();
