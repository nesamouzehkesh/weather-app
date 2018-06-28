import React from "react";
import { Icon } from "antd";
import City from "./City";
import WeatherInfo from "./WeatherInfo";
import Forecasts from "./Forecasts";
import Weekly from "./Weekly";
import Loading from "./Loading";

const Weather = ({
  loading,
  weekWeather,
  showWeekly,
  backHandler,
  weatherVisible,
  city,
  country,
  windSpeed,
  temperature,
  humidity,
  description,
  getWeeklyWeather,
  getSpecificWeather
}) => (
  <div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {(weatherVisible || showWeekly) && <City city={city} country={country} />}
      {weatherVisible && (
        <WeatherInfo
          humidity={humidity}
          description={description}
          windSpeed={windSpeed}
        />
      )}
      {loading && <Loading loading={loading} />}
      {showWeekly && !weatherVisible && <Weekly weekWeather={weekWeather} />}
      {(weatherVisible || showWeekly) && (
        <Forecasts
          getWeeklyWeather={getWeeklyWeather}
          getSpecificWeather={getSpecificWeather}
        />
      )}
    </div>
  </div>
);

export default Weather;
