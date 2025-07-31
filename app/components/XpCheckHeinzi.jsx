import React from "react";
import HeinziBlurb from "./HeinziBlurb";
import { useMyContext } from "./ContextProvider";

function XpCheckHeinzi() {
  const { player, setPlayer, inventoryBadges } = useMyContext();

  return (
    <div>
      {player.xp >= 50 ? <HeinziBlurb badge={inventoryBadges[0]} /> : null}
      {player.inventory.items.length == 2 ? (
        <HeinziBlurb badge={inventoryBadges[1]} />
      ) : null}
    </div>
  );
}

export default XpCheckHeinzi;
