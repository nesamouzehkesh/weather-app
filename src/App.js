import React, { Component } from "react";
import { Row, Col, Card, Layout, Divider } from "antd";
import "./App.css";
import Title from "./components/Title";
import Weather from "./components/Weather";
import InputForm from "./components/InputForm";
import Weekly from "./components/Weekly";
import Back from "./components/Back";

const { Sider, Content, Footer, Header } = Layout;
const API_KEY = "eaefa571f2944356854d9bc874ade000";

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      uv: undefined,
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
      `https://api.weatherbit.io/v2.0/current?city=${city},${country}&key=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (city && country) {
      this.setState((prevState, props) => {
        return {
          loading: false,
          weatherVisible: true,
          temperature: data.data[0].temp,
          humidity: data.data[0].dewpt,
          uv: data.data[0].uv,
          city: data.data[0].city_name,
          country: data.data[0].country_code,
          description: data.data[0].weather.description
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
        showWeekly: true,
        temperature: undefined
      };
    });
    const api_call = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city},${country}&key=${API_KEY}`
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

  getSpecificWeather = async date => {
    const { city, country } = this.state;
    this.setState((prevState, props) => {
      return {
        loading: true,
        weatherVisible: false,
        showWeekly: false
      };
    });
    const end_date = date
      .clone()
      .add(1, "days")
      .format("YYYY-MM-DD");
    const start_date = date.format("YYYY-MM-DD");

    const api_call = await fetch(
      `https://api.weatherbit.io/v2.0/history/daily?city=${city},${country}&start_date=${start_date}&end_date=${end_date}&key=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState((prevState, props) => {
      return {
        loading: false,
        weatherVisible: true,
        city: prevState.city,
        country: prevState.country,
        temperature: data.data[0].temp,
        humidity: data.data[0].dewpt,
        windSpeed: data.data[0].max_wind_spd,
        uv: data.data[0].max_uv,
        description: undefined // because this api url does not provide the description so if we do not set to
        // undefined it will show the current state weather `description` which is not of course valid for this
        // specific date chosen.
      };
    });
  };

  getStyle = weatherVisible => {
    return {
      height: "350px",
      fontSize: "80px",
      background:
        'url("https://user-images.githubusercontent.com/13462129/42033425-31998e30-7b20-11e8-9ecc-28d3d762ecb0.jpg")',
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
      uv,
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
              'url("https://user-images.githubusercontent.com/13462129/42066147-65f0f242-7b82-11e8-9fa8-f3195c9d050f.jpg")',
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
              uv={uv}
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
