import React, { use, useState } from "react";
import Player from "../Player/Player";

const Players = ({
  promisePlayers,
  handleToggle,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const players = use(promisePlayers);

  return (
    <div className="max-w-7xl mx-auto mt-[90px] mb-[350px]">
      <div className="flex justify-between items-center mb-8 px-2.5 md:px-0">
        <h3 className="text-3xl font-bold">Available Players</h3>
        <div className="border border-[#1313131a] rounded-xl w-fit">
          <button
            onClick={handleToggle}
            className="py-3 px-5 bg-[#E7FE29] cursor-pointer"
          >
            Available
          </button>
          <button onClick={handleToggle} className="py-3 px-5 cursor-pointer">
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="player-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {players.map((player) => (
          <Player
            availableBalance={availableBalance}
            setAvailableBalance={setAvailableBalance}
            player={player}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
