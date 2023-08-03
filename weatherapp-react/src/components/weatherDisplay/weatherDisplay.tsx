import React, { FC, ReactElement } from "react";
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

    return (
        <div className="weather-container">
            <div className="location">
                <p>Location</p>
                <p>{data.name}</p>
            </div>
            <div className="temperature">
                <p>Temperature</p>
                <p>{toFarenheit(data.main.temp)} °F / {toCelsius(data.main.temp)} °C</p>
            </div>
            <div className="temperature">
                <p>Minimum Temperature</p>
                <p>{toFarenheit(data.main.temp_min)} °F / {toCelsius(data.main.temp_min)} °C</p>
            </div>
            <div className="temperature">
                <p>Maximum Temperature</p>
                <p>{toFarenheit(data.main.temp_max)} °F / {toCelsius(data.main.temp_max)} °C</p>
            </div>
            <div className="wind">
                <p>Wind</p>
                <p>{data.wind.speed} m/s</p>
            </div>
            <div className="clouds">
                <p>Coulds</p>
                <p>{data.clouds.all} %</p>
            </div>
        </div>
    )
}

export default WeatherDisplay;