import React, { Component } from 'react';
import PokemonCard from './components/PokemonCard/Card';
import Wrapper from './components/Wrapper/Wrapper';
import Score from './components/Score/Score';
import pokemon from './pokemon.json';
import './App.css';

class App extends Component {
  // Setting this.state.pokemon to the cards json array
  state = {
    pokemon,
    clickedPokemon: [],
    score: 0,
    maxScore: 12,
    status: ''
  };

  //shuffle the pup cards in the browser when clicked
  shufflePokemonCards = id => {
    let clickedPokemon = this.state.clickedPokemon;

    if(clickedPokemon.includes(id)){

      this.setState({ score: 0, status:  'Game over, you clicked the same Pokemon twice! Click a picture to try again!', clickedPokemon: [] });

    } else {

      // Push the id of the pokemon that the user has clicked into the clickedPokemon array
      clickedPokemon.push(id)
      // If the length of the clickedPokemon array reaches 12 display to the user that they have won
      if(clickedPokemon.length === 12){

        this.setState({score: 12, status: 'Victory! You clicked all the Pokemone without clicking on the same one!', clickedPokemon: []});

      }

      this.setState({ pokemon, clickedPokemon, score: clickedPokemon.length, status: '' });

      // Randomize the pokemon cards when the user clicks on one
      for (let i = pokemon.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className='App text-center'>
        <header className='header'>
          <h1 className='title'>Pokemon Clicky Game!</h1>
          <p className='introduction'>
            Click any image to begin your game, but don't click the same picture twice!
          </p>
        </header>
        <Score 
          total={this.state.score}
          maxScore={this.state.maxScore}
          status={this.state.status}
        />
        <Wrapper>
          {this.state.pokemon.map(pokemon => (
            <PokemonCard
              shufflePokemonCards={this.shufflePokemonCards}
              id={pokemon.id}
              key={pokemon.id}
              image={pokemon.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
