import { useState } from "react";
import React from "react";
import "./App.css";
import Level from "./components/Level";
import Lightning from "./assets/light.svg";
//get them to completely fill up the rows
//add game over message
//change to shuffleCards in effect
function App() {
  const [level, setLevel] = useState(11);
  const [gameStart, setGameStart] = useState(false);
  let gameOver = level == 8;
  function resetGame() {
    setLevel(0);
  }
  const cardsPerLevel = [];
  for (let i = 0; i <= 10; i++) {
    cardsPerLevel[i] = 4 + i * 2;
  }
  return (
    <>
      <img className="lightning one" src={Lightning} alt="" />
      <img className="lightning two" src={Lightning} alt="" />
      <img className="lightning three" src={Lightning} alt="" />

      <div className="header">
        <h1>Memory Card</h1>
      </div>
      <h2>Level {level + 1}</h2>
      {level == 11 && (
        <div className="game-over">
          <p>Game over</p>
          <button onClick={resetGame} className="play-again-button">
            Play Again
          </button>
        </div>
      )}
      {level < 11 && (
        <Level
          level={level}
          setLevel={setLevel}
          key={level}
          cards={cardsPerLevel[level]}
        ></Level>
      )}
    </>
  );
}

export default App;
