import React from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";

const Pokemons = ({
  pokemons,
  selectPokemonHandler,
  userChoice,
  gameClickHandler,
  isGameOn,
}) => {
  const clickHandler = () => {
    gameClickHandler();
  };

  return (
    <div className="Pokemons">
      <div className="Pokemons-game">
        <h2 className="Pokemons-title">select any four characters and submit to Play</h2>
        <button
          type={"submit"}
          onClick={() => clickHandler()}
          disabled={userChoice.length !== 4}>
          Submit
        </button>
      </div>
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
