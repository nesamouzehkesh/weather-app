import React from 'react';

const Weekly = ({ showWeekly, weekWeather, weatherVisible }) => (
    <div style={{ display: 'flex', marginTop: '15px' }}>
        {
            weekWeather.map(day => {
                return (
                    !weatherVisible && showWeekly &&
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p>{day.date}</p>
                        <p>{day.min - day.max}</p>
                        <p>{day.precipitation}</p>
                    </div>
                )
            })
        }
    </div>
)

export default Weekly;