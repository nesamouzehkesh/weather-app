import React from 'react';
import { Button } from 'antd';

const Loading = ({ loading }) => (
    <Button style={{ marginTop: '15px', opacity: '.2' }} shape="circle" loading size="large" />
)

export default Loading;