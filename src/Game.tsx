import { SetStateAction, useState } from "react";

import Header from "@/Header";
import { Fragment } from "react/jsx-runtime";
import NavButton from "./NavButton";
import Player from "./game_components/Player"
import GameBoard from "./game_components/GameBoard"

function Game() {
  return (
    <div>
      <Header />
      <main className="game">
        <h1>Tic-Tac-Toe</h1>
        <ol className="game-nav">
          <Player name={"Player 1"} symbol={'X'}/>
          <Player  name={"Player 2"} symbol={'O'}/>
        </ol>
        <GameBoard />
        <NavButton target={"/"} name="Home" />
      </main>
    </div>
  );
}


export default Game;
