import React from "react";
import { Icon } from 'antd';

const Weather = ({ backHandler, weatherVisible, city, country, windSpeed, temperature, humidity, description, getWeeklyWeather }) => (
    <div >
        {weatherVisible && <div style={{ display: 'flex', flexDirection: 'column', color: '#fbd491' }}>
            {
                city && country &&
                <div>
                    <span style={{ fontWeight: 'bold', fontFamily: 'junction-light', fontSize: '40px' }}>
                        {city}, {country}
                    </span>
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
            }
            {
                humidity && <p > Humidity:<span > {humidity} </span></p>
            }
            {
                windSpeed && <p > Wind Speed:<span > {windSpeed} </span></p>
            }
            {
                description && <p > Conditions:<span> {description} </span></p>
            }
            <a onClick={() => backHandler()}> <Icon type="caret-left" style={{ marginTop: '60px', fontSize: 40, color: '#faf714' }} /></a>
        </div>}
    </div>
)

export default Weather;

