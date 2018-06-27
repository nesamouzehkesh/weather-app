import React from 'react';

const Weekly = ({ showWeekly, weekWeather, weatherVisible }) => {
    function getDayOfWeek(date) {
        var dateFormat = new Date(date);
        var dayOfWeek = dateFormat.getDay();
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }
    return (
        <div style={{ display: 'flex', marginTop: '15px', flexWrap: 'wrap' }}>
            {
                weekWeather.map(day => {
                    return (
                        !weatherVisible && showWeekly &&
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', alignItems: 'center' }}>
                            <p>{getDayOfWeek(day.date)}, {day.date.split('-')[1]}/ {day.date.split('-')[2]}</p>
                            <p>min: {Number(day.min.toFixed(1))} - max: {Number(day.max.toFixed(1))}</p>
                            <p>precipitation: {day.precipitation}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Weekly;