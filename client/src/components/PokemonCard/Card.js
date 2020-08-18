import React from "react";
import "./Card.css";

// This will render the pokemon cards to the screen with the help of the information from the 
// pokemon.json file
const PokemonCard = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shufflePokemonCards(props.id)} className='shuffleScore'/>
  </div>
);

export default PokemonCard;
