import React, { FC, ReactElement, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa" 
import "./searchBar.css"

interface SearchBarProps{
    handleData: (data: []) => void
}

const SearchBar: FC<SearchBarProps> = ({ handleData }) => {

    const [ query, setQuery ] = useState<string>("");
    const [ geoCoordinates, setGeoCoordinates ] = useState<{lat: number, lon: number}>({lat: 0, lon: 0});
    const [ geoCodingData, setGeoCodingData ] = useState<any>({});

    const urlGeoCoding = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=7d70cba9d5e9a20d12900d0f3a337fed`
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${geoCoordinates.lat}&lon=${geoCoordinates.lon}&appid=7d70cba9d5e9a20d12900d0f3a337fed`

    /*const handleCoordinates = (value: {lat: number, lon: number}) => {
        setGeoCoordinates({lat: value.lat, lon: value.lon});
    } 

    const handleGeoCodingData = (value: {}) => setGeoCodingData(value);*/

    const fetchInfoFromGeoCoding = async () => {
        return await fetch(urlGeoCoding)
            .then((res) => res.json())
            .then((d) => {
                setGeoCodingData(d)
                setGeoCoordinates({ lat: d[0]?.lat || 0, lon: d[0]?.lon || 0 });
            })
            .catch((e) => console.log("Error fetching data from GeoCoding: " + e))
    }

    const fetchInfoFromWeatherAPI = async () => {
        return await fetch(urlWeather)
            .then((res) => res.json())
            .then((d) => handleData(d))
            .catch((e) => console.log("Error fetching data from WeatherAPI: " + e))

    }

    // Async/Await version without .then
    /*const fetchInfoFromGeoCoding = async () => {
        try {
            const res = await fetch(urlGeoCoding);
            const data = await res.json();
            setGeoCodingData(data);
            setGeoCoordinates({ lat: data[0]?.lat || 0, lon: data[0]?.lon || 0 });
        } catch (error) {
            console.log("Error fetching data from GeoCoding: " + error);
        }
    };
        
    const fetchInfoFromWeatherAPI = async () => {
        try {
            const res = await fetch(urlWeather);
            const data = await res.json();
            handleData(data);
        } catch (error) {
            console.log("Error fetching data from WeatherAPI: " + error);
        }
    };*/
      

    /*useEffect(() => {
        fetchInfoFromGeoCoding();
    }, [query]);*/

    /*useEffect(() => {
        fetchInfoFromWeatherAPI();
    }, [geoCoordinates, geoCoordinates.lat, geoCoordinates.lon]);*/

    useEffect(() => {console.log(geoCodingData)}, [geoCodingData]);

    useEffect(() => {
        console.log("lat: " + geoCoordinates.lat);
        console.log("lon: " + geoCoordinates.lon);
    }, [geoCoordinates, geoCoordinates.lat, geoCoordinates.lon]);
    
    return (
      <div className="searchBar-div">
        <input type="search" name="" id="search-bar" placeholder="Search..." onChange={(e) => setQuery(e.target.value)}/>
        <button className="search-btn" onClick={() => {
                                                        fetchInfoFromGeoCoding();
                                                        fetchInfoFromWeatherAPI();
                                                      }}>
          <FaSearch />
        </button>
      </div>
    );
};

export default SearchBar;