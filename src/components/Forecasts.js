import React from 'react';
import { Icon } from 'antd';

const Forecasts = ({ getWeeklyWeather }) => (
    <span>
        <span style={{ fontSize: '17px', marginRight: '16px' }}>
            <a onClick={() => getWeeklyWeather()}>
                <Icon type="bar-chart" style={{ marginRight: '2px', fontSize: 25, color: '#faf714' }} />
            </a>
            Weekly Forcast
        </span>
        <span style={{ fontSize: '17px' }}>
            <a>
                <Icon type="dot-chart" style={{ marginRight: '2px', fontSize: 25, color: '#faf714' }} />
            </a>
            Specific Date
        </span>
    </span>
)
export default Forecasts;