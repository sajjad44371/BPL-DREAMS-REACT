import React from "react";
import Player from "../Player/Player";
import SingleSelectedPlayer from "../SingleSelectedPlayer/SingleSelectedPlayer";

const Selected = ({ handleToggle, selectedPlayers, handleRemovePlayer }) => {
  return (
    <div className="max-w-7xl mx-auto mt-[90px] mb-[350px] px-2.5 md:px-0">
      <div className="flex justify-between items-center mb-8 ">
        <h3 className="text-3xl font-bold">
          Selected Player ({selectedPlayers.length}/6)
        </h3>
        <div className="border border-[#1313131a] rounded-xl ">
          <button onClick={handleToggle} className="py-3 px-5 cursor-pointer">
            Available
          </button>
          <button
            onClick={handleToggle}
            className="py-3 px-5 bg-[#E7FE29] cursor-pointer"
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>
      {/* selected player container  */}
      <div>
        {selectedPlayers.map((player) => (
          <SingleSelectedPlayer
            player={player}
            handleRemovePlayer={handleRemovePlayer}
          ></SingleSelectedPlayer>
        ))}
      </div>
      <div className="border border-[#131313] rounded-xl p-2 w-fit mt-6">
        <button
          onClick={handleToggle}
          className="bg-[#e7fe29] py-2 px-4 rounded-xl text-[#131313] font-bold cursor-pointer"
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default Selected;
