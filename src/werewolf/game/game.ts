import { GameMode } from "../gamemodes";
import { Role } from "../roles";

export type Phase = "NIGHT" | "DAY" | "DUSK";

export class Game {
  running: boolean = false;

  phase: Phase;

  actors: Map<string, Role>;

  constructor(public players: string[], public gameMode: GameMode) {
    if (players.length < 1) {
      throw Error("player less than 1");
    }

    this.setup();
  }

  setup() {
    this.actors = new Map(
      this.players.map((player) => [player, new Role(player, this)])
    );
  }

  start() {}
}
