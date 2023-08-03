import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import SearchBar from './components/searchBar/searchBar';
import WeatherDisplay from './components/weatherDisplay/weatherDisplay';

import Sun from './imgs/sun.jpeg';
import Rain from './imgs/rain.jpeg';
import Clouds from './imgs/clouds.jpeg';
import Snow from './imgs/snow.jpeg';

import './App.css';

export interface WeatherData{
  name: string;
  weather: {main: string}[];
  main: {temp: number,
         temp_min: number,
         temp_max: number,
         humidity: number,
        };
  wind: {speed: number};
  clouds: {all: number};
}

enum WeatherType{
  SUN,
  RAIN,
  CLOUDS,
  SNOW,
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

  return (
    <div className="app-container">
      {data.weather ?
        <img 
          src={data.weather[0].main === "Clear" ? 
                                              Sun : data.weather[0].main === "Rain" ? 
                                                                                  Rain : data.weather[0].main === "Snow" ? 
                                                                                                                      Snow : data.weather[0].main === "Clouds" ? 
                                                                                                                                                              Clouds : Sun} 
          alt="background" 
          className='background-img'
        />
      : <img 
          src={Sun} 
          alt="background" 
          className='background-img'
        />
    }
      <SearchBar 
        handleData={handleData}
      />
      {data.main && data.wind && data.clouds && data.weather ? <WeatherDisplay data={data}/> : null}
    </div>
  );
}

export default App;
