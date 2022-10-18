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
        {userChoice.length !== 4
          ? "Choose any four characters and click here to Play"
          : "Play"}
      </button>
      {userChoice.length ? (
        <button type={"submit"} onClick={() => resetHandler()}>
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
