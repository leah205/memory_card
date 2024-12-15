import { useState } from "react";
import React from 'react'
import "./App.css";
import Level from "./components/Level";
import Lightning from "./assets/light.svg";
//get them to completely fill up the rows
//add game over message
//add backgroun
//disable event listener after round is over
//follow screenshot to connect to remot
function App() {
  const [level, setLevel] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  let gameOver = (level == 8);

  const cardsPerLevel = [4, 6, 8, 10, 12, 14, 16,18];
  return (
    <>
    <img className = "lightning one" src={Lightning} alt="" />
    <img className = "lightning two" src={Lightning} alt="" />
    <img className = "lightning three" src={Lightning} alt="" />

    <div className = {`game-over-message ${gameOver? null: "hidden"}`}>
      <p>Game over!</p>
    </div>
      <div className="header">
        <h1>Memory Card</h1>
      </div>
      <h2>Level {level + 1}</h2>
      <Level level={level} setLevel = {setLevel} 
      key={level} cards={cardsPerLevel[level]}></Level>
    </>
  );
}


export default App;
