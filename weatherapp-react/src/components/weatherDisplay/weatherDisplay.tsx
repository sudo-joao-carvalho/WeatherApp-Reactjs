import React, { FC, ReactElement } from "react";
import "./weatherDisplay.css"

interface WeatherDisplayProps{
    data: [];
}

const WeatherDisplay: FC<WeatherDisplayProps> = ({ data }) => {

    return (
        <div className="weather-container">
            <h1></h1>
        </div>
    )
}

export default WeatherDisplay;