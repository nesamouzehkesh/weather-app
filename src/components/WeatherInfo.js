import React from "react";
import PropTypes from "prop-types";

const WeatherInfo = ({ uv, humidity, description }) => (
  <div style={{ color: "#d59933" }}>
    {humidity && (
      <p>
        {" "}
        Humidity:<span> {humidity} </span>
      </p>
    )}
    {(uv || uv == 0) && (
      <p>
        {" "}
        UV:<span> {uv} </span>
      </p>
    )}
    {description && (
      <p>
        {" "}
        Conditions:<span> {description} </span>
      </p>
    )}
  </div>
);

WeatherInfo.PropTypes = {
  uv: PropTypes.string,
  humidity: PropTypes.string,
  description: PropTypes.string
};

WeatherInfo.defaultProps = {
  uv: "",
  humidity: "",
  description: ""
};

export default WeatherInfo;
