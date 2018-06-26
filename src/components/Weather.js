import React from "react";
import { Icon } from 'antd';

const Weather = ({ backHandler, weatherVisible, city, country, temperature, humidity, description, error }) => (
    <div >
        {weatherVisible && <div style={{ display: 'flex', flexDirection: 'column', color: '#fbd491' }}>
            {
                city && country && <div>
                    <span style={{ fontWeight: 'bold', fontFamily: 'junction-light', fontSize: '40px' }}> {city}, {country}</span>
                    <span style={{ marginLeft: '30px', fontSize: '20px' }}>Weekly Forcast</span>
                </div>
            }
            {
                humidity && <p > Humidity:<span > {humidity} </span></p>
            }
            {
                description && <p > Conditions:<span> {description} </span></p>
            }
            <a onClick={() => backHandler()}> <Icon type="left-circle-o" style={{ marginTop: '80px', fontSize: 40, color: '#faad14' }} /></a>
        </div>}
    </div>
)

export default Weather;

