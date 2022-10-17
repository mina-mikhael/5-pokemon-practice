import { useState } from "react";
import "./App.css";
import data from "./poke-data";
import Pokemons from "./components/Pokemons";
//end of imports

const initialState = {
  pokemons: data,
  isGameOn: false,
  aiChoice: [],
  userChoice: [],
};

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <h1>welcome to Pokedex game</h1>
      <Pokemons pokemons={state.pokemons} />
    </div>
  );
}

export default App;
