import React from "react";

const WeatherInfo = ({ uv, humidity, windSpeed, description }) => (
  <div style={{ color: "#d59933" }}>
    {humidity && (
      <p>
        {" "}
        Humidity:<span> {humidity} </span>
      </p>
    )}
    {uv && (
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

export default WeatherInfo;
