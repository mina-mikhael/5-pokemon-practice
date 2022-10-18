import React from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";

const Pokemons = ({
  pokemons,
  selectPokemonHandler,
  userChoice,
  gameClickHandler,
  isGameOn,
  resetGame,
}) => {
  const clickHandler = () => {
    gameClickHandler();
  };
  const resetHandler = () => {
    resetGame();
  };

  return (
    <div className="Pokemons">
      <button
        type={"submit"}
        onClick={() => clickHandler()}
        disabled={userChoice.length !== 4}>
        {userChoice.length === 0
          ? "Choose any 4 characters and click here to Play"
          : userChoice.length < 3
          ? `Choose ${4 - userChoice.length} more cards`
          : userChoice.length < 4
          ? "Choose 1 more card"
          : "Play"}
      </button>
      {userChoice.length ? (
        <button className="reset" type={"submit"} onClick={() => resetHandler()}>
          Reset
        </button>
      ) : (
        <></>
      )}

      <div className="Pokemons-list">
        {pokemons.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            selectPokemonHandler={selectPokemonHandler}
            userChoice={userChoice}
            isGameOn={isGameOn}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
