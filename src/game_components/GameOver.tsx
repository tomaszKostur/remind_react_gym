function GameOver({
  onRestart,
  winnerName,
}: {
  onRestart: () => void;
  winnerName: string;
}) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Game Over</h2>
        <p>Congrats {winnerName}!!!</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;
