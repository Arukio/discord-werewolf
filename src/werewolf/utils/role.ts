import _ from "lodash";

import { GameMode } from "../gamemodes";
import { RoleType } from "../roles";

export function generateRoles(mode: GameMode, players: string[]) {
  const eqIndex = (i: string) => Number(i) === players.length;
  const guideIndex = _.chain(mode.roleGuide).keys().findIndex(eqIndex).value();

  let roles: RoleType[] = [];

  if (guideIndex) {
    roles = _.chain(mode.roleGuide)
      .values()
      .slice(0, guideIndex + 1)
      .flatten()
      .value();
  }

  if (roles.length < players.length) {
    const remain = players.length - roles.length;

    const remainRoles = _.range(remain).map(() => _.sample(mode.fill));

    roles = roles.concat(remainRoles);
  }

  return roles;
}
