import React, { useState } from 'react';
import axios from 'axios';

import './App.css';


function App() {

  const [pokemons, setPokemons] = useState([]);

  const showPokemon =() =>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(apiPull =>{
        const pokeData = apiPull.data.results;
        setPokemons(pokeData)
      })
      .catch(err => console.log(err))
  }


  return (
    <div className="App">
      <button onClick= {showPokemon}>Show Pokemon</button>
      {pokemons.map((pokemon, i) => {
          return <p key={i}>{pokemon.name}</p>
        })
      }
    </div>
  );
}

export default App;
