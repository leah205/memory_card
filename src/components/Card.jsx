import React from "react";
import "../styles/card.css";

export default function Card({ image, addCard, name, lost, win, level }) {
  function handleClick(e) {
    addCard(e.target.alt);
  }
  return (
    <>
      <div
        className={`card ${lost ? "lost" : ""}
         ${win ? "win" : ""}
         ${level > 2 && level < 8 ? "small" : null}
         ${level > 7 ? "ultra-small" : null}`}
        onClick={(e) => handleClick(e)}
      >
        <img src={image} alt={name}></img>
      </div>
    </>
  );
}
