import { GameMode } from ".";
import { generateRoles } from "../utils/role";

export const DefaultGameMode: GameMode = {
  name: "default",
  roleGuide: {
    5: ["villager"],
  },
  fill: ["villager"],
  assignRoles: generateRoles,
};
