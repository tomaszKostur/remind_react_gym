import Header from "@/Header";
import { Fragment } from "react/jsx-runtime";
import NavButton from "./NavButton";

function Game() {
  return (
    <div>
      <Header />
      <main id="game">
        <h1>Game Placeholder</h1>
        <ol>
          <Player />
          <Player />
        </ol>
        <NavButton target={"/"} name="Hom" />
      </main>
    </div>
  );
}

function Player() {
  return (
    <li>
      <input defaultValue="Player 1" /> <span> X</span>{" "}
      <span>
        <button>Edit</button>
      </span>
    </li>
  );
}

export default Game;
