import React from "react";
import { Icon } from 'antd';
import City from './City';
import WeatherInfo from './WeatherInfo';

const Weather = ({ backHandler, weatherVisible, city, country, windSpeed, temperature, humidity, description, getWeeklyWeather }) => (
    <div >
        {weatherVisible && <div style={{ display: 'flex', flexDirection: 'column', color: '#fbd491' }}>
            <City city={city} country={country} />
            <WeatherInfo humidity={humidity} description={description} windSpeed={windSpeed} />
            <div>
                <span><a onClick={() => backHandler()}> <Icon type="caret-left" style={{ marginTop: '60px', fontSize: 40, color: '#faf714' }} /></a></span>
                <span style={{ marginLeft: '30px', fontSize: '17px', marginRight: '6px' }}>
                    <a onClick={() => getWeeklyWeather()}>
                        <Icon type="bar-chart" style={{ marginRight: '2px', fontSize: 25, color: '#faf714' }} />
                    </a>
                    Weekly Forcast
                    </span>
                <span style={{ marginLeft: '30px', fontSize: '17px' }}>
                    <a>
                        <Icon type="dot-chart" style={{ marginRight: '2px', fontSize: 25, color: '#faf714' }} />
                    </a>
                    Specific Date
                    </span>
            </div>
        </div>}
    </div>
)

export default Weather;

