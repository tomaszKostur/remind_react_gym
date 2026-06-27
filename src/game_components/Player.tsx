import { useState } from "react";

function Player({ name, symbol }: { name: string; symbol: string }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditClick(){
    setIsEditing(true);
  }

  let playerNameElement = <span className="player-name">{name}</span>;
  if (isEditing){
    playerNameElement = <input type="text" required/>
  }

  return (
    <li className="player-container">
      <span className="player-name">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} className="m-1">Edit</button>
    </li>
  );
}

export default Player;
