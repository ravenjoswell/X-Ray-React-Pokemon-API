import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [src, setimageLoader] = useState()
  const randomPokemon = Math.floor(Math.random() * 1025)
  const getPokemon = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/" + randomPokemon);
      console.log(response.data); 
      const imageLoader = response.data.sprites.other.home.front_default
      setimageLoader(imageLoader)
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

 
return (
    <>
      <div className="body">
        <h1>Pokemon Database</h1>
          <div className='container'>
            <img src={src} alt="Pokemon Image"/>
          </div>
          <button id="generate" onClick={ getPokemon }>Generate Pokemon</button>
      </div>
    </>
  )
}

export default App
