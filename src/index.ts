require("dotenv").config();

import { WerewolfClient } from "./core/client";

async function main() {
  const client = new WerewolfClient();

  client.setup();
  client.start(process.env.DISCORD_TOKEN);
}

main();
