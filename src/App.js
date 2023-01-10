import React, {useEffect, useState} from 'react';
import { getPokemons } from './api';
import './App.css';
import Navbar from './components/Navbar';
import  Pokedex  from './components/Pokedex';
import Searchbar from './components/Searchbar';

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async(pokemon) => {
        return await getPokemons();
      })
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error)
    }
  }

  useEffect(() => {
    console.log("carregou")
    fetchPokemons();
  }, [])

  return (

    <div>
      <Navbar/>
      <Searchbar/>
      <Pokedex pokemons={pokemons.results} loading={loading}/>
    </div>
  );
}

export default App;
