import React from "react";
import Card from "./Card";

const Game = ({ aiChoice, userChoice, resetGame }) => {
  const clickHandler = () => {
    resetGame();
  };
  return (
    <div className="Game">
      <button className="Game-reset-btn" type="submit" onClick={() => clickHandler()}>
        Play Again
      </button>
      <h3>You Selected</h3>
      <div className="Game-user card-container">
        {userChoice.map((el) => {
          return <Card key={el.id} pokemon={el} />;
        })}
      </div>
      <div className="Game-winner">win Message</div>
      <h3>Computer Selected</h3>
      <div className="Game-computer card-container">
        {aiChoice.map((el) => {
          return <Card key={el.id} pokemon={el} />;
        })}
      </div>
    </div>
  );
};

export default Game;
