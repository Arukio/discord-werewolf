import { Game } from "../game/game";

export type RoleType = "villager";
export type Faction = "VILLAGER" | "WEREWOLF" | "NEUTRAL";

export class Role {
  dead: boolean = false;
  name: RoleType;
  faction: Faction = "NEUTRAL";

  constructor(public id: string, public game: Game) {
    if (!id) {
      throw new Error("id cannot be empty");
    }
  }
}
