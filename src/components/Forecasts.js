import React from 'react';
import { Icon } from 'antd';

const Forecasts = ({ getWeeklyWeather }) => (
    <span>
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
    </span>
)
export default Forecasts;