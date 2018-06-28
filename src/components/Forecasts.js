import React from "react";
import { Icon } from "antd";

const Forecasts = ({ getWeeklyWeather }) => (
  <div style={{ marginTop: "20px" }}>
    <span style={{ color: "#676767" }}>
      <span
        style={{ fontSize: "17px", marginRight: "30px", marginTop: "15px" }}
      >
        <a onClick={() => getWeeklyWeather()}>
          <Icon
            type="bar-chart"
            style={{ marginRight: "2px", fontSize: 25, color: "#bd7e38" }}
          />
        </a>
        Weekly Forcast
      </span>
      <span style={{ fontSize: "17px" }}>
        <a>
          <Icon
            type="dot-chart"
            style={{ marginRight: "2px", fontSize: 25, color: "#bd7e38" }}
          />
        </a>
        Specific Date
      </span>
    </span>
  </div>
);
export default Forecasts;
