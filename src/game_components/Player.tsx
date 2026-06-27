import { SetStateAction, useState } from "react";

function Player({ name, symbol, active }: { name: string; symbol: string , active: boolean}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name)
  function handleEditClick(){
    setIsEditing(prev => !prev);
  }
  function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
    setPlayerName(event.target.value);
  }

  let playerNameElement = <span className="player-name">{playerName}</span>;
  if (isEditing){
    playerNameElement = <input type="text" required value={playerName} onChange={handleChange}/>
  }


  return (
    <li className={`player-container ${active ? 'player-container-active' : ''}`}>
      <span className="player-name">
        {playerNameElement}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick} className="m-1">{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
