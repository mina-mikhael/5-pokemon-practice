import React from "react";
import "./Pokemon.css";

const Pokemon = (props) => {
  const { id, name, imgUrl, type, xp } = props.pokemon;
  const { selectPokemonHandler, userChoice } = props;

  const isSelected = userChoice.some((el) => el.id === id);
  return (
    <div
      className={isSelected ? "Pokemon selected" : "Pokemon"}
      onClick={() => selectPokemonHandler(id)}>
      <h4 className="Pokemon-title">{name}</h4>
      <img src={imgUrl} alt={name + " pokemon"} className="Pokemon-img" />
      <p className="Pokemon-info">Type: {type}</p>
      <p className="Pokemon-info">xp: {xp}</p>
    </div>
  );
};

export default Pokemon;
