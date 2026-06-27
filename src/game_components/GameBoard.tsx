import { SetStateAction, useState } from "react";

function GameBoard() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [boardData, setBoardData] = useState({
    "11": "_",
    "12": "_",
    "13": "_",
    "21": "_",
    "22": "_",
    "23": "_",
    "31": "_",
    "32": "_",
    "33": "_",
  });

  function moveHandler(position: string) {
    if (boardData[position] !== "_") return;

    setBoardData((prev) => ({
      ...prev,
      [position]: currentPlayer,
    }));
    setCurrentPlayer((prev) => (prev === "X" ? "O" : "X"));
  }

  return (
    <div className="game-board">
      <ol>
        <li
          onClick={() => {
            moveHandler("11");
          }}
        >
          {boardData["11"]}
        </li>
        <li
          onClick={() => {
            moveHandler("12");
          }}
        >
          {boardData["12"]}
        </li>
        <li
          onClick={() => {
            moveHandler("13");
          }}
        >
          {boardData["13"]}
        </li>
      </ol>
      <ol>
        <li
          onClick={() => {
            moveHandler("21");
          }}
        >
          {boardData["21"]}
        </li>
        <li
          onClick={() => {
            moveHandler("22");
          }}
        >
          {boardData["22"]}
        </li>
        <li
          onClick={() => {
            moveHandler("23");
          }}
        >
          {boardData["23"]}
        </li>
      </ol>
      <ol>
        <li
          onClick={() => {
            moveHandler("31");
          }}
        >
          {boardData["31"]}
        </li>
        <li
          onClick={() => {
            moveHandler("32");
          }}
        >
          {boardData["32"]}
        </li>
        <li
          onClick={() => {
            moveHandler("33");
          }}
        >
          {boardData["33"]}
        </li>
      </ol>
    </div>
  );
}

export default GameBoard;