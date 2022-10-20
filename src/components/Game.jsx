import React from "react";
import Card from "./Card";
import { scoreCalc } from "../helpers/helpers";
import "./Game.css";
import winner from "../assets/winner.mp3";

const Game = ({ aiChoice, userChoice, resetGame }) => {
  const clickHandler = () => {
    resetGame();
  };
  let computerScore = scoreCalc(aiChoice);
  let userScore = scoreCalc(userChoice);

  return (
    <div className="Game">
      {computerScore < userScore && (
        <>
          <img src="https://i.gifer.com/6SSp.gif" id="celebration" alt="winner gif" />
          <audio src={winner} autoPlay={true}></audio>
        </>
      )}
      <button type="submit" onClick={() => clickHandler()}>
        Play Again
      </button>
      <div className="Game-winner">
        <h3 id={userScore > computerScore ? "win" : computerScore > userScore ? "lose" : null}>
          {userScore === computerScore
            ? "it's a tie"
            : userScore > computerScore
            ? "Congrats! You Win"
            : "You Lose, Better Luck next time"}
        </h3>
      </div>
      <div className="all-cards">
        <div className="result-cards">
          <h3>Your Cards</h3>
          <h4>Score: {userScore}</h4>
          <div className="Game-user cards-container">
            {userChoice.map((el) => {
              return <Card key={el.id} pokemon={el} />;
            })}
          </div>
        </div>
        <div className="result-cards">
          <h3>Computer Cards</h3>
          <h4>Score: {computerScore}</h4>
          <div className="Game-computer cards-container">
            {aiChoice.map((el) => {
              return <Card key={el.id} pokemon={el} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
