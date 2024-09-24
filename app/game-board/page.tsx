import React from "react";

const GameBoard = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-gray-400 via-gray-700 to-black text-white grid grid-cols-7 grid-rows-7 gap-4 p-4">
      <div className="bg-red-400 col-span-3 row-span-3 col-start-3 row-start-3">
        Discard pile
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 col-start-4 row-start-6">
        Player hand
      </div>
      <div className="bg-red-400 row-span-2 col-start-3 row-start-6">
        Player avatar
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 col-start-1 row-start-4">
        Opp 1, hand
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 col-start-3 row-start-1">
        Opp 2, hand
      </div>
      <div className="bg-red-400 col-span-2 row-span-2 col-start-6 row-start-4">
        Opp 3, hand
      </div>
      <div className="bg-red-400 col-span-2 col-start-1 row-start-3">
        Opp 1, avatar
      </div>
      <div className="bg-red-400 row-span-2 col-start-5 row-start-1">
        Opp 2, avatar
      </div>
      <div className="bg-red-400 col-span-2 col-start-6 row-start-3">
        Opp 3, avatar
      </div>
      <div className="bg-red-400 col-start-2 row-start-2">Deck</div>
      <div className="bg-red-400 col-start-7 row-start-1">Leave&Settings</div>
      <div className="bg-red-400 col-start-1 row-start-1">Logo</div>
    </div>
  );
};

export default GameBoard;
