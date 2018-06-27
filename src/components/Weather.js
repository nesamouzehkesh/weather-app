import React from "react";
import { Icon } from 'antd';
import City from './City';
import WeatherInfo from './WeatherInfo';
import Forecasts from './Forecasts';

const Weather = ({ showWeekly, backHandler, weatherVisible, city, country, windSpeed, temperature, humidity, description, getWeeklyWeather }) => (
    <div>
        <div style={{ display: 'flex', flexDirection: 'column', color: '#fbd491' }}>
            {(weatherVisible || showWeekly) && <City city={city} country={country} />}
            {weatherVisible && <WeatherInfo humidity={humidity} description={description} windSpeed={windSpeed} />}
            <div>
                {weatherVisible && <Forecasts getWeeklyWeather={getWeeklyWeather} />}
            </div>
        </div>
    </div>
)

export default Weather;

