import { useState } from "react";
import "./App.css";
import data from "./poke-data";
import Pokemons from "./components/Pokemons";
import { aiSelector, userSelector } from "./helpers/helpers";
//end of imports

const initialState = {
  pokemons: data,
  isGameOn: false,
  aiChoice: [],
  userChoice: [],
};

function App() {
  const [state, setState] = useState(initialState);

  const selectPokemonHandler = (id) => {
    const currentSelection = userSelector(state.pokemons, id);
    setState({ ...state, userChoice: currentSelection });
  };

  return (
    <div className="App">
      <h1>welcome to Pokedex game</h1>
      <Pokemons
        pokemons={state.pokemons}
        selectPokemonHandler={selectPokemonHandler}
        userChoice={state.userChoice}
      />
    </div>
  );
}

export default App;
