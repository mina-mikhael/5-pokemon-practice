import React from "react";
import Pokemon from "./Pokemon";
import "./Pokemons.css";

const Pokemons = ({ pokemons, selectPokemonHandler, userChoice }) => {
  return (
    <div className="Pokemons">
      <h2 className="Pokemons-title">select any four characters and submit your choice</h2>
      <div className="Pokemons-list">
        {pokemons.map((pokemon) => (
          <Pokemon
            pokemon={pokemon}
            key={pokemon.id}
            selectPokemonHandler={selectPokemonHandler}
            userChoice={userChoice}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
