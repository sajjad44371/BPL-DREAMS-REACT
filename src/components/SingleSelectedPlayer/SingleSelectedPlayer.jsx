import React from "react";
import delImg from "../../assets/del.png";

const SingleSelectedPlayer = ({ player, handleRemovePlayer }) => {
  return (
    <div className="mb-5 border border-[#131313] rounded-xl">
      <div className="flex justify-between items-center p-6">
        <div className="flex justify-items-start items-center">
          <div className="w-[80px] h-[80px] mr-5">
            <img className="rounded-xl" src={player.img} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{player.name}</h3>
            <p className="text-sm my-1.5">{player.battingStyle}</p>
            <p className="text-sm">{player.bowlingStyle}</p>
          </div>
        </div>
        <div className="btn rounded-full">
          <button
            onClick={() => handleRemovePlayer(player)}
            className="cursor-pointer"
          >
            <img src={delImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSelectedPlayer;
