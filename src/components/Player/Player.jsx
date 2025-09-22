import React, { useState } from "react";
import userImg from "../../assets/user.png";
import flagImg from "../../assets/flag.png";
import { toast } from "react-toastify";

const Player = ({
  player,
  availableBalance,
  setAvailableBalance,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    if (player.price > availableBalance) {
      toast("You haven't enough money");
      return;
    }
    if (selectedPlayers.length === 6) {
      toast("Already 6 players selected");
      return;
    }
    setIsSelected(true);
    // setAvailableBalance((prevBalance) => prevBalance - player.price);
    setAvailableBalance(availableBalance - player.price);

    const newSelectedPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newSelectedPlayers);
    toast("Player selected");
  };

  return (
    <div className="border border-[#1313131a] rounded-xl">
      <div className="p-6">
        <img
          src={player.img}
          alt=""
          className="block mx-auto w-full h-[400px] object-cover rounded-xl mb-4"
        />
        <h3 className="flex justify-items-start text-xl font-semibold">
          <span className="mr-4">
            <img src={userImg} alt="" />
          </span>
          <span>{player.name}</span>
        </h3>
        <div className="flex justify-between items-center py-4 border-b-1 border-[#1313131a]">
          <div className="">
            <p className="flex justify-items-start text-[#131313]">
              <span className="mr-3">
                <img src={flagImg} alt="" />
              </span>
              <span>{player.country}</span>
            </p>
          </div>
          <div>
            <button className="bg-[#1313130d] py-2.5 px-4 rounded-xl text-sm font-semibold">
              {player.role}
            </button>
          </div>
        </div>
        <h3 className="font-bold mt-2">Rating: ({player.rating}/10)</h3>
        <div className="flex justify-between items-center mt-2">
          <h3 className="font-medium text-sm">{player.battingStyle}</h3>
          <h3 className="font-medium text-sm">{player.bowlingStyle}</h3>
        </div>
        <div className="flex justify-between items-center mt-2">
          <h3 className="font-medium">Price: ${player.price}</h3>
          <button
            disabled={isSelected}
            onClick={handleSelected}
            className="btn border border-[#1313131a] rounded-xl py-2 px-4 cursor-pointer"
          >
            {isSelected ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
