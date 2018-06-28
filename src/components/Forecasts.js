import React from "react";
import { Icon, DatePicker } from "antd";

const Forecasts = ({ getWeeklyWeather, getSpecificWeather }) => (
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
        <Icon
          type="dot-chart"
          style={{ marginRight: "2px", fontSize: 25, color: "#bd7e38" }}
        />
        Specific Date :
        <DatePicker
          size="small"
          placeholder="select the date"
          onChange={() => {
            getSpecificWeather();
          }}
        />
      </span>
    </span>
  </div>
);
export default Forecasts;
