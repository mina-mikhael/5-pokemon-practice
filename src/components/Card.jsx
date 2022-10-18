import React from "react";
import "./Pokemon.css";
import "./Card.css";

const Card = (props) => {
  const { name, imgUrl, type, xp } = props.pokemon;

  return (
    <div className="Pokemon">
      <h4 className="Pokemon-title">{name}</h4>
      <img src={imgUrl} alt={name + " pokemon"} className="Pokemon-img" />
      <p className="Pokemon-info">Type: {type}</p>
      <p className="Pokemon-info">xp: {xp}</p>
    </div>
  );
};

export default Card;
