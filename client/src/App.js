import React, { Component } from "react";
import PokemonCard from "./components/PokemonCard/Card";
import Wrapper from "./components/Wrapper/Wrapper";
import Score from "./components/Score/Score";
import pokemon from "./pokemon.json";
import "./App.css";

class App extends Component {
  // Setting this.state.pokemon to the cards json array
  state = {
    pokemon,
    clickedPokemon: [],
    score: 0,
    goal: 8,
    status: ""
  };

  //shuffle the pup cards in the browser when clicked
  shuffleScoreCard = id => {
    let clickedPokemon = this.state.clickedPokemon;

    if(clickedPokemon.includes(id)){

      this.setState({ score: 0, status:  "Game over, you clicked the same Pokemon twice! Click a picture to try again!", clickedPokemon: [] });

    } else {

      clickedPokemon.push(id)
      if(clickedPokemon.length === 8){
        this.setState({score: 8, status: "You Won! Great Job, Smartie! Click to play again!", clickedPokemon: []});
        console.log('You Win');
        return;
      }

      this.setState({ pokemon, clickedPokemon, score: clickedPokemon.length, status: " " });

      for (let i = pokemon.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]];
      }
    }
  }

  // Map over this.state.cards and render a Card component for each card object
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Clickster</h1>
          <p className="App-intro">
            Try not to click the same image twice!
          </p>
        </header>
        <Score total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.pokemon.map(puppy => (
            <PokemonCard
              shuffleScoreCard={this.shuffleScoreCard}
              id={puppy.id}
              key={puppy.id}
              image={puppy.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
