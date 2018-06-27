import React from 'react';

const City = ({ city, country }) => (
    <div>
        {city && country &&
            <span style={{ fontWeight: 'bold', fontFamily: 'junction-light', fontSize: '40px' }}>
                {city}, {country}
            </span>
        }
    </div>
)

export default City;