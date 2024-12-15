import { useEffect, useState } from "react";
import React from 'react';
import Card from "./Card";
import "../styles/level.css"
//add alt

export default function Level({ level, cards, setLevel }) {
  const [charArr, setCharArr] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [levelOver, setLevelOver] = useState(false);
  const [levelWon, setLevelWon] = useState(false);

 
 
  function isRepeatCard(name){
    return clickedCards.some((ele) => ele == name);
  }

  function resetLevel(){
    setScore(0);
    setCharArr([]);
    setClickedCards([]);
    setLevelOver(false);
  }

  function goToNextLevel(){
    resetLevel();
    setLevel(level + 1);
  }



  function getShuffledArr(arr){
    const oldArr = arr;
    let availableIndices = [];
    const newArr = [];
    for (let i = 0; i < cards; i++){
      availableIndices[i] = i;
    }
    while(availableIndices.length){
      const ele = oldArr.pop();
      const index = Math.floor(Math.random() * availableIndices.length);
      newArr[availableIndices[index]] = ele;
      availableIndices = availableIndices.slice(0, index).concat(availableIndices.slice(index + 1));  
    }
    return newArr;
  }

  function changeCardLost(name){
    const repeated = charArr.filter((ele) => ele.name == name)[0];
    repeated.lost = true;
    setCharArr([...charArr.filter((ele) => ele.name != name), repeated]);
  }

  function addCard(name){
    
    if(isRepeatCard(name)){
      changeCardLost(name)
      setLevelOver(true);
    } else {
      setClickedCards([...clickedCards, name ])
      setScore(score + 1);
      if(score + 1 > bestScore){
        setBestScore(bestScore + 1);
      }
      setCharArr(getShuffledArr(charArr))
      if(score + 1 == cards){
        
        setLevelWon(true);
      }
    }
   
  }
//add keys
 
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://hp-api.onrender.com/api/characters");
      const json = await data.json();
      let filtered = json.filter((ele) => ele.image);
      let arr = [];
      while(arr.length < cards){
        let num = Math.floor(Math.random() * filtered.length);
        if (!arr.some((ele) => ele.image == filtered[num].image)) {
  
         arr.push({
            image: filtered[num].image,
            id: filtered[num].id,
            name: filtered[num].name,
          });
        }
      }
      setCharArr(arr);
    };
    if (!charArr.length) {
      console.log('hello');
      fetchData();
    }
   
  }, [cards, charArr]);

  return <>
  <div className="score-board">
    <p>score: {score}</p>
    <p>best score: {bestScore}</p>
  </div>
  <div className="card-container">
    {charArr.map((ele) => {
      return <Card  win = {levelWon} addCard = {addCard} key = {ele.id} image = {ele.image} name = {ele.name} lost = {ele.lost}></Card>
    })}
  </div>
  <button onClick = {goToNextLevel}
  className = {`next-level-button ${levelWon? null : "hidden"}`}>Proceed to Level {level + 2}</button>
  <button onClick = {resetLevel} className = {`reset-button ${levelOver? null : "hidden"}`}>Reset</button>
  </>;
}
