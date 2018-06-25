import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import Datepicker from './components/datepicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Datepicker />
      </div>
    );
  }
}

export default App;
