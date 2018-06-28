import React, { Component } from "react";
import { Row, Col, Card, Layout, Divider } from "antd";
import "./App.css";
import Title from "./components/Title";
import Weather from "./components/Weather";
import InputForm from "./components/InputForm";
import Weekly from "./components/Weekly";
import Back from "./components/Back";

const { Sider, Content, Footer, Header } = Layout;
const API_KEY = "260c12130ccbb1e64787d52fd9671600"; // this will be deleted later, and I will use the second key for all purposes
const WEEK_API_KEY = "eaefa571f2944356854d9bc874ade000";

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      windSpeed: undefined,
      error: "Please enter both city and country",
      loading: false,
      weatherVisible: false,
      showWeekly: false,
      showSpecific: false,
      weekWeather: []
    };
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    this.setState((prevState, props) => {
      return { loading: true };
    });
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState((prevState, props) => {
        return {
          loading: false,
          weatherVisible: true,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          description: data.weather[0].description
        };
      });
    }
  };

  getWeeklyWeather = async () => {
    const { city, country } = this.state;
    this.setState((prevState, props) => {
      return {
        loading: prevState.weekWeather.length === 0 ? true : false,
        weatherVisible: false,
        showWeekly: true
      };
    });
    const api_call = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${country}&key=${WEEK_API_KEY}`
    );
    const data = await api_call.json();
    const weekWeather = data.data.slice(0, 7);
    const filteredWeekWeather = weekWeather.map(day => ({
      max: day.app_max_temp,
      min: day.app_min_temp,
      date: day.datetime,
      precipitation: day.precip
    }));
    if (city && country) {
      this.setState((prevState, props) => {
        return {
          loading: false,
          weekWeather: filteredWeekWeather
        };
      });
    }
  };

  getSpecificWeather = async (date, dateString) => {
    const { city, country } = this.state;
    this.setState((prevState, props) => {
      return {
        loading: true,
        weatherVisible: false,
        showWeekly: false
      };
    });
    //const timeStamp = new Date(dateString).getTime() / 1000;
    console.log(dateString);
    const api_call = await fetch(
      `api.weatherbit.io/v2.0/history/daily?city=${city},${country}&start_date=${dateString}&end_date=${dateString}&key=${WEEK_API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState((prevState, props) => {
      return {
        loading: false,
        weatherVisible: true,
        city: prevState.city,
        country: prevState.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description
      };
    });
  };

  getStyle = weatherVisible => {
    return {
      height: "350px",
      fontSize: "80px",
      background:
        'url("https://user-images.githubusercontent.com/13462129/42004779-af8ac2f8-7ab4-11e8-83f1-5d242521207a.jpg")',
      padding: "20px"
    };
  };

  backHandler = () => {
    this.setState((prevState, props) => {
      return {
        weatherVisible: false,
        showWeekly: false,
        weekWeather: []
      };
    });
  };
  render() {
    const {
      loading,
      showWeekly,
      weekWeather,
      windSpeed,
      temperature,
      humidity,
      city,
      country,
      description,
      error,
      weatherVisible
    } = this.state;
    return (
      <Layout style={{ border: "1px solid", margin: "10px" }}>
        <Header style={{ background: "#f0f2f5", marginLeft: "50px" }}>
          <Title />
        </Header>
        <Layout
          style={{
            background:
              'url("https://user-images.githubusercontent.com/13462129/42004873-33cec618-7ab5-11e8-850a-da6dac1f6407.jpg")',
            marginLeft: "100px",
            marginRight: "100px"
          }}
          hasSider={true}
        >
          <Sider width={350} style={this.getStyle()}>
            <span>{(weatherVisible || showWeekly) && temperature}&#8451;</span>
          </Sider>
          <Content style={{ padding: "40px" }}>
            <InputForm
              showWeekly={showWeekly}
              getWeather={this.getWeather}
              weatherVisible={weatherVisible}
            />
            <Weather
              backHandler={this.backHandler}
              weatherVisible={weatherVisible}
              showWeekly={showWeekly}
              temperature={temperature}
              humidity={humidity}
              windSpeed={windSpeed}
              city={city}
              country={country}
              description={description}
              getWeeklyWeather={this.getWeeklyWeather}
              getSpecificWeather={this.getSpecificWeather}
              weekWeather={weekWeather}
              loading={loading}
            />
          </Content>
        </Layout>
        <Footer style={{ display: "flex" }}>
          <Back backHandler={this.backHandler} />
          <span style={{ position: "absolute", left: "50%" }}>
            Ant Design ©2016 Created by Ant UED{" "}
          </span>
        </Footer>
      </Layout>
    );
  }
}

export default App;
