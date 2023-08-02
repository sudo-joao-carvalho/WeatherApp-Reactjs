import React, { FC, ReactElement } from "react";
import { WeatherData } from "../../App";

import "./weatherDisplay.css"

interface WeatherDisplayProps{
    data: WeatherData;
}

const WeatherDisplay: FC<WeatherDisplayProps> = ({ data }) => {

    return (
        <div className="weather-container">
            <h1>{data.name}</h1>
            <h2>{data.main.temp}</h2>
        </div>
    )
}

export default WeatherDisplay;