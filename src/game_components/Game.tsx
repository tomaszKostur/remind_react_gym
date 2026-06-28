import { SetStateAction, useRef, useState } from "react";

import Header from "@/Header";
import { Fragment } from "react/jsx-runtime";
import NavButton from "@/NavButton";
import Player from "./Player";
import GameBoard from "./GameBoard";
import GameOver from "./GameOver";

const initial_game_board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkWinner(boardData) {
  for (let i = 0; i < 3; i++) {
    for (let symbol of ["X", "O"]) {
      if (
        boardData[i][0] == symbol &&
        boardData[i][1] == symbol &&
        boardData[i][2] == symbol
      ) {
        return symbol;
      }
      if (
        boardData[0][i] == symbol &&
        boardData[1][i] == symbol &&
        boardData[2][i] == symbol
      ) {
        return symbol;
      }
    }
  }
  for (let symbol of ["X", "O"]) {
    if (
      boardData[0][0] == symbol &&
      boardData[1][1] == symbol &&
      boardData[2][2] == symbol
    ) {
      return symbol;
    }
    if (
      boardData[0][2] == symbol &&
      boardData[1][1] == symbol &&
      boardData[2][0] == symbol
    ) {
      return symbol;
    }
  }
  return;
}

function Game() {
  const [boardData, setBoardData] = useState(initial_game_board);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  // let winner = null;
  // console.log(`winner: ${winner}`);

  function handleMove(row: number, col: number) {
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
    console.log(`moveHandler: ${boardData} , ${row}: ${col}`);
    // if cell is already filled then to nothing
    if (boardData[row][col] !== null) return;

    setBoardData((prev) => {
      // first step is nust a shallow copy previous
      const next_board = prev.map((row) => [...row]);
      next_board[row][col] = currentPlayer;
      setWinner(checkWinner(next_board));
      return next_board;
    });
    // setWinner(checkWinner(boardData));
  }

  function cleanBaord() {
    setBoardData(initial_game_board);
    setWinner(null);
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
        {winner ? (
          <GameOver onRestart={cleanBaord} winnerName={`${winner}`} />
        ) : (
          ""
        )}
        <div className="nav-bar">
          <NavButton target="/external_data" name="Go External Data Example" />
          <NavButton target="/" name="Go to Gym Home" />
        </div>
      </main>
    </div>
  );
}

export default Game;
