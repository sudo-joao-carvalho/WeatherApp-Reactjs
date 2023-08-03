import React, { FC, ReactElement, useEffect } from "react";
import { WeatherData } from "../../App";

import "./weatherDisplay.css"

interface WeatherDisplayProps{
    data: WeatherData;
}

const WeatherDisplay: FC<WeatherDisplayProps> = ({ data }) => {

    const toCelsius = (temperature: number) => {
        return Math.round(temperature - 273.15);
    }

    const toFarenheit = (temperature: number) => {
        return Math.round((((temperature - 273.15) * 9) / 5) + 32);
    }

    useEffect(() => {
        console.log("data.weather.main: " + JSON.stringify(data.weather[0].main));
      }, [data.weather[0].main]);

    return (
        <div className="weather-container">
            <div className="main-info-container">
                <div className="location">
                    <p className="title">Location</p>
                    <p id="locationName">{data.name}</p>
                </div>
                <div className="temperature">
                    <p className="title">Temperature</p>
                    <p>{toFarenheit(data.main.temp)} °F / {toCelsius(data.main.temp)} °C</p>
                </div>
                <div className="temperature">
                    <p className="title">Minimum Temperature</p>
                    <p>{toFarenheit(data.main.temp_min)} °F / {toCelsius(data.main.temp_min)} °C</p>
                </div>
                <div className="temperature">
                    <p className="title">Maximum Temperature</p>
                    <p>{toFarenheit(data.main.temp_max)} °F / {toCelsius(data.main.temp_max)} °C</p>
                </div>
            </div>
            <div className="bottom-info-container">
                <div className="wind">
                    <p className="title">Wind</p>
                    <p>{data.wind.speed} m/s</p>
                </div>
                <div className="clouds">
                    <p className="title">Coulds</p>
                    <p>{data.clouds.all} %</p>
                </div>
                <div className="humidity">
                    <p className="title">Humidity</p>
                    <p>{data.main.humidity} %</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDisplay;