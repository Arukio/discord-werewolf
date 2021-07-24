import { DefaultGameMode } from "../../gamemodes/default";
import { generateRoles } from "../role";

describe("role generator", () => {
  test("should return true", () => {
    expect(generateRoles(DefaultGameMode, ["1", "2", "3", "4"]));
  });
});
