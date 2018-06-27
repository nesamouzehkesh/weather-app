import React from 'react';

const Weekly = ({ weekWeather }) => {
    function getDayOfWeek(date) {
        var dateFormat = new Date(date);
        var dayOfWeek = dateFormat.getDay();
        return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
    }

    return (
        <div style={{ display: 'flex', marginTop: '15px', flexWrap: 'wrap' }}>
            {
                weekWeather.map(day =>
                    <div style={{ borderRadius: '3px', padding: '3px', display: 'flex', flexDirection: 'column', marginLeft: '20px', alignItems: 'center', background: 'rgba(255, 255, 255, 0.2)' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '15px' }}>{getDayOfWeek(day.date)}, {day.date.split('-')[1]}/ {day.date.split('-')[2]}</p>
                        <p><span style={{ fontWeight: 'bold' }}>min: </span>{Number(day.min.toFixed(1))} - <span style={{ fontWeight: 'bold' }}>max: </span>{Number(day.max.toFixed(1))}</p>
                        <p><span style={{ color: '#9c1808' }}>precipitation:</span> {day.precipitation}</p>
                    </div>
                )}
        </div>
    )
}

export default Weekly;