import React from 'react';

const WeatherInfo = ({ humidity, windSpeed, description }) => (
    <div>
        {
            humidity && <p > Humidity:<span > {humidity} </span></p>
        }
        {
            windSpeed && <p > Wind Speed:<span > {windSpeed} </span></p>
        }
        {
            description && <p > Conditions:<span> {description} </span></p>
        }
    </div>
)

export default WeatherInfo;