import { RoleType } from "../roles";

export type GameMode = {
  name: string;
  roleGuide: { [key: number]: RoleType[] };
  fill: RoleType[];
  assignRoles: (mode: GameMode, players: string[]) => RoleType[];
};
