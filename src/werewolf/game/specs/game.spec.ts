import { Game } from "../game";
import { DefaultGameMode } from "../../gamemodes/default";

describe("#constructor", () => {
  test("should throw when player is empty", () => {
    expect(() => new Game([""], DefaultGameMode)).toThrow();
  });
});
