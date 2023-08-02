import React, { useState } from 'react';
import logo from './logo.svg';
import SearchBar from './components/searchBar';

import Sun from './imgs/sun.jpeg';
import Rain from './imgs/rain.jpeg';

import './App.css';

function App() {

  const [ weather, setWeather ] = useState<string>("sun");

  const handleWeather = () => {

    if(weather === "sun"){
      setWeather("rain");
    }else if(weather === "rain"){
      setWeather("sun");
    }
  }

  return (
    <div className="app-container">
      <img src={weather === "sun" ? Sun: Rain} alt="background" className='background-img'/>
      <SearchBar handleWeather={handleWeather}/>
    </div>
  );
}

export default App;
