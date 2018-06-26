import React, { Component } from 'react';
import { Row, Col, Card, Layout, Divider } from 'antd';
import './App.css';
import Title from './components/Title';
import Weather from './components/Weather';
import InputForm from './components/InputForm';

const { Sider, Content, Footer, Header } = Layout;
const API_KEY = "260c12130ccbb1e64787d52fd9671600";

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    }
  }

  async getWeather(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    console.log(data)
  }
  render() {
    const { temperature, humidity, city, country, description, error } = this.state;
    return (
      <Layout>
        <Header style={{ background: '#f0f2f5' }}> </Header>
        <Layout style={{ background: '#91C065', marginLeft: '100px', marginRight: '100px' }} hasSider={true}>
          <Sider width={400} style={{ background: 'url("https://us.123rf.com/450wm/belchonock/belchonock1701/belchonock170100701/68451195-water-drops-on-glass-with-treble-clef-drawing-.jpg?ver=6")', padding: '20px' }}>
            <Title />
          </Sider>
          <Content style={{ padding: '40px' }}>
            <InputForm getWeather={this.getWeather} />
            <Weather
              temperature={temperature}
              humidty={humidity}
              city={city}
              country={country}
              description={description}
              error={error}
            />
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
      </Footer>
      </Layout>
    );
  }
}

export default App;
