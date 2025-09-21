import React, { use } from "react";
import Player from "../Player/Player";

const Players = ({ promisePlayers }) => {
  const players = use(promisePlayers);

  return (
    <div className="max-w-7xl mx-auto mt-[90px]">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-3xl font-bold">Available Players</h3>
        <div className="border border-[#1313131a] rounded-xl ">
          <button className="py-3 px-5">Available</button>
          <button className="py-3 px-5">Selected(0)</button>
        </div>
      </div>
      <div className="player-container">
        {players.map((player) => (
          <Player player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
