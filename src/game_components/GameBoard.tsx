
function GameBoard({onMoveHaldler, boardData}) {

  return (
    <div className="game-board">
      {boardData.map((row, rowIdx) => {
        return (
          <ol key={rowIdx}>
            {row.map((col, colIdx) => {
              return (
                <li key={colIdx} onClick={() => onMoveHaldler(rowIdx, colIdx)}>
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
