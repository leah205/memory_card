import React from 'react';
import "../styles/card.css"

export default function Card({ image, addCard, name, lost, win }) {
 

 function handleClick(e){
    addCard(e.target.alt);

 }
  return (
    <>
      <div className = {`card ${lost? "lost": ""} ${win ? "win": ""}`} onClick = {(e) => handleClick(e)}>
        <img src={image} alt = {name}></img>
        </div>
    </>
  );
}
