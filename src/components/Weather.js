import React from "react";
import { Icon } from 'antd';

const Weather = ({ backHandler, weatherVisible, city, country, temperature, humidity, description, error }) => (
    <div style={{ marginTop: '30px' }}>
        {weatherVisible && <div>
            {
                city && country && <p > Location:
	 		<span> {city}, {country}</span>
                </p>
            }
            {
                temperature && <p > Temperature:
	 		<span > {temperature}	</span>
                </p>
            }
            {
                humidity && <p > Humidity:
	 		<span > {humidity} </span>
                </p>
            }
            {
                description && <p > Conditions:
	 		<span> {description} </span>
                </p>
            }
            {
                city && country && <p > Location:
	 		<span> {city}, {country}</span>
                </p>
            }
            {
                temperature && <p > Temperature:
	 		<span > {temperature}	</span>
                </p>
            }
            {
                humidity && <p > Humidity:
	 		<span > {humidity} </span>
                </p>
            }
            {
                description && <p > Conditions:
	 		<span> {description} </span>
                </p>
            }
            <a onClick={() => backHandler()}> <Icon type="left-circle-o" style={{ fontSize: 25, color: '#faad14' }} /></a>
            <a onClick={() => { }}> <Icon type="pie-chart" style={{ fontSize: 25, color: '#faad14' }} /></a>

        </div>}
    </div>
)

export default Weather;

