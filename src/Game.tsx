import { SetStateAction, useState } from "react";

import Header from "@/Header";
import { Fragment } from "react/jsx-runtime";
import NavButton from "./NavButton";
import Player from "./game_components/Player";
import GameBoard from "./game_components/GameBoard";

const initial_game_board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function Game() {
  const [boardData, setBoardData] = useState(initial_game_board);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handleMove(row: number, col: number) {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    console.log(`moveHandler: ${boardData} , ${row}: ${col}`);
    // if cell is already filled then to nothing
    if (boardData[row][col] !== null) return;

    setBoardData((prev) => {
      // first step is nust a shallow copy previous
      const next_board = prev.map((row) => [...row]);
      next_board[row][col] = currentPlayer;
      return next_board;
    });
  }

  return (
    <div>
      <Header />
      <main className="game">
        <h1>Tic-Tac-Toe</h1>
        <ol className="game-nav">
          <Player
            name={"Player 1"}
            symbol={"X"}
            active={currentPlayer === "X"}
          />
          <Player
            name={"Player 2"}
            symbol={"O"}
            active={currentPlayer === "O"}
          />
        </ol>
        <GameBoard onMoveHaldler={handleMove} boardData={boardData} />
        <NavButton target={"/"} name="Home" />
      </main>
    </div>
  );
}

export default Game;
