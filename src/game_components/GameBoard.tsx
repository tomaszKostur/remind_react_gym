import { SetStateAction, useState } from "react";

const initial_game_board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function GameBoard() {
  const [boardData, setBoardData] = useState(initial_game_board);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function moveHandler(row: number, col: number) {
    console.log(`moveHandler: ${boardData} , ${row}: ${col}`);
    // if cell is already filled then to nothing
    if (boardData[row][col] !== null) return;

    setBoardData((prev) => {
      // first step is nust a shallow copy previous
      const next_board = prev.map((row) => [...row]);
      next_board[row][col] = currentPlayer;
      return next_board;
    });
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <div className="game-board">
      {boardData.map((row, rowIdx) => {
        return (
          <ol key={rowIdx}>
            {row.map((col, colIdx) => {
              return (
                <li key={colIdx} onClick={() => moveHandler(rowIdx, colIdx)}>
                  {boardData[rowIdx][colIdx]}
                </li>
              );
            })}
          </ol>
        );
      })}
    </div>
  );
}

export default GameBoard;
