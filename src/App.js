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
      error: "Please enter both city and country",
      loading: false,
      weatherVisible: false
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.setState((prevState, props) => {
      return ({ loading: !prevState.loading })
    }) // set the loading to true when you hit the search button 
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json();
    /**
     * decrease the opacity of the Sider's background
     * siderOpacityChange();
     */
    if (city && country) {
      this.setState((prevState, props) => {
        return {
          loading: !prevState.loading, // switch it back to false
          weatherVisible: !prevState.weatherVisible, // weather details is now visible
          temperature: data.main.temp,
          humidity: data.main.humidity,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description,
        }
      })
    }
  }

  getStyle = (weatherVisible) => {
    if (weatherVisible) {
      return { height: '350px', fontSize: '80px', background: 'url("https://user-images.githubusercontent.com/13462129/41908482-7b35ea9c-7987-11e8-9966-48897323b276.jpg")', padding: '20px' }
    }

    return { height: '350px', background: 'url("https://user-images.githubusercontent.com/13462129/41895410-4d18b80a-7965-11e8-9f7a-ed7aa0d5e71b.jpg")', padding: '20px' }
  }

  backHandler = () => {
    this.setState((prevState, props) => {
      return {
        weatherVisible: !prevState.weatherVisible
      }
    })
  }
  render() {
    const { temperature, humidity, city, country, description, error, weatherVisible } = this.state;
    return (
      <Layout>
        <Header style={{ background: '#f0f2f5', marginLeft: '50px' }}> <Title />
        </Header>
        <Layout style={{ background: 'rgb(144, 135, 32)', marginLeft: '100px', marginRight: '100px' }} hasSider={true}>
          <Sider
            width={350}
            style={this.getStyle(weatherVisible)}>
            {weatherVisible && temperature}&#8451;

          </Sider>
          <Content style={{ padding: '40px' }}>
            <InputForm getWeather={this.getWeather} weatherVisible={weatherVisible} />
            <Weather
              backHandler={this.backHandler}
              weatherVisible={weatherVisible}
              temperature={temperature}
              humidity={humidity}
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
      </Layout >
    );
  }
}

export default App;
