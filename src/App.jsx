import { useState } from "react";
import React from 'react'
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Level from "./components/Level";
//get them to completely fill up the rows
//change font
function App() {
  const [level, setLevel] = useState(0);
  const [gameStart, setGameStart] = useState(false);

  const cardsPerLevel = [4, 6, 8, 10, 12, 14, 16,18, 20];
  return (
    <>
      <h1>Memory Card</h1>
      <h2>Level {level + 1}</h2>
      <Level level={level} setLevel = {setLevel} 
      key={level} cards={cardsPerLevel[level]}></Level>
    </>
  );
}


export default App;
