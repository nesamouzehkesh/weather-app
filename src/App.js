import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './App.css';
import Title from './components/Title';
import Weather from './components/Weather';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row type="flex" justify="start">
          <Col span={15}>
            <Title />
          </Col>
          <Col span={9}>
            <Form />
            <Weather />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
