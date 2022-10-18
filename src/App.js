import { useState } from "react";
import "./App.css";
import data from "./poke-data";
import Pokemons from "./components/Pokemons";
import Game from "./components/Game";
import { aiSelector, userSelector } from "./helpers/helpers";
//end of imports

const initialState = {
  pokemons: data,
  isGameOn: false,
  aiChoice: [],
  userChoice: [],
};

let userSelection = [];

function App() {
  const [state, setState] = useState(initialState);

  const selectPokemonHandler = (id) => {
    const currentSelection = userSelector(state.pokemons, id, userSelection);
    setState({ ...state, userChoice: currentSelection });
  };

  const gameClickHandler = () => {
    const aiPick = aiSelector(state.pokemons);
    setState({ ...state, isGameOn: true, aiChoice: aiPick });
  };

  const resetGame = () => {
    setState(initialState);
    userSelection = [];
  };

  return (
    <div className="App">
      {!state.isGameOn ? (
        <>
          <h1>welcome to Pokedex game</h1>
          <Pokemons
            pokemons={state.pokemons}
            selectPokemonHandler={selectPokemonHandler}
            userChoice={state.userChoice}
            gameClickHandler={gameClickHandler}
            isGameOn={state.isGameOn}
            resetGame={resetGame}
          />
        </>
      ) : (
        <Game aiChoice={state.aiChoice} userChoice={state.userChoice} resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
