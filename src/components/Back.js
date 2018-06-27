import React from 'react';
import { Icon } from 'antd';

const Back = ({ backHandler }) => (
    <span style={{ marginLeft: '40px' }}>
        <a onClick={() => backHandler()} style={{ color: 'rgb(0, 0, 0)', fontSize: '20px', fontFamily: 'junction-light' }}>
            <Icon type="caret-left" style={{ fontSize: 40, color: '#b5a96b' }} />
            Back
        </a>
    </span>
)

export default Back;