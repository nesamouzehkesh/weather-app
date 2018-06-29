import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
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
  uv,
  temperature,
  humidity,
  description,
  getWeeklyWeather,
  getSpecificWeather,
  selectedDate
}) => (
  <div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {(weatherVisible || showWeekly) && <City city={city} country={country} />}
      {weatherVisible && (
        <WeatherInfo humidity={humidity} description={description} uv={uv} />
      )}
      {loading && <Loading loading={loading} />}
      {showWeekly && !weatherVisible && <Weekly weekWeather={weekWeather} />}
      {(weatherVisible || showWeekly) && (
        <Forecasts
          getWeeklyWeather={getWeeklyWeather}
          getSpecificWeather={getSpecificWeather}
          selectedDate={selectedDate}
        />
      )}
    </div>
  </div>
);

Weather.PropTypes = {
  loading: PropTypes.bool.isRequired,
  weekWeather: PropTypes.array.isRequired,
  showWeekly: PropTypes.bool.isRequired,
  backHandler: PropTypes.func.isRequired,
  weatherVisible: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  uv: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  humidity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  getWeeklyWeather: PropTypes.func.isRequired,
  getSpecificWeather: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(moment).isRequired
};

Weather.defaultProps = {
  loading: false,
  weekWeather: [],
  showWeekly: false,
  backHandler: () => {},
  weatherVisible: false,
  city: "Sydney",
  country: "AU",
  uv: "",
  temperature: "",
  humidity: "",
  description: "",
  getWeeklyWeather: () => {},
  getSpecificWeather: () => {},
  selectedDate: {}
};

export default Weather;
