import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import SearchBar from './components/searchBar/searchBar';
import WeatherDisplay from './components/weatherDisplay/weatherDisplay';

import Sun from './imgs/sun.jpeg';
import Rain from './imgs/rain.jpeg';
import Clouds from './imgs/clouds.jpeg';

import './App.css';

export interface WeatherData{
  name: string;
  main: {temp: number,
         temp_min: number,
         temp_max: number,
        };
  wind: {speed: number};
  clouds: {all: number};
}

function App() {

  const [ data, setData ] = useState<any>({});

  /*const handleCityName = (value: string) => {
    setCityName(value);
  }*/

  const handleData = (value: []) => setData(value);
  //useEffect(() => {console.log(cityName)}, [cityName]);

  useEffect(() => {
    console.log("data: " + JSON.stringify(data));
  }, [data]);

  /*useEffect(() => {
    console.log("data: " + JSON.stringify(data));
  }, [data]);*/

  return (
    <div className="app-container">
      <img src={Sun} alt="background" className='background-img'/>
      <SearchBar 
        handleData={handleData}
      />
      {data.main && data.wind && data.clouds ? <WeatherDisplay data={data}/> : null}
    </div>
  );
}

export default App;
