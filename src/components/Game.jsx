import React from "react";
import Card from "./Card";
import { scoreCalc } from "../helpers/helpers";
import "./Game.css";

const Game = ({ aiChoice, userChoice, resetGame }) => {
  const clickHandler = () => {
    resetGame();
  };
  let computerScore = scoreCalc(aiChoice);
  let userScore = scoreCalc(userChoice);

  return (
    <div className="Game">
      <button className="Game-reset-btn" type="submit" onClick={() => clickHandler()}>
        Play Again
      </button>
      <div className="Game-winner">
        <h3>
          {userScore === computerScore
            ? "it's a tie"
            : userScore > computerScore
            ? "Congrats! You Win"
            : "You Lose, Better Luck next time"}
        </h3>
      </div>
      <h3>Your Cards</h3>
      <h4>You Scored: {userScore}</h4>
      <div className="Game-user card-container">
        {userChoice.map((el) => {
          return <Card key={el.id} pokemon={el} />;
        })}
      </div>
      <h3>Computer Cards</h3>
      <h4>Computer Scored: {computerScore}</h4>
      <div className="Game-computer card-container">
        {aiChoice.map((el) => {
          return <Card key={el.id} pokemon={el} />;
        })}
      </div>
    </div>
  );
};

export default Game;
