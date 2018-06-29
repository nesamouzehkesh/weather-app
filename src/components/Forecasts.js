import React from "react";
import { Icon, DatePicker } from "antd";

const Forecasts = ({ getWeeklyWeather, getSpecificWeather }) => (
  <div style={{ marginTop: "20px" }}>
    <span style={{ color: "#a4a4a4" }}>
      <span
        style={{ fontSize: "17px", marginRight: "30px", marginTop: "15px" }}
      >
        <a onClick={() => getWeeklyWeather()}>
          <Icon
            type="bar-chart"
            style={{ marginRight: "2px", fontSize: 25, color: "#61cfd8" }}
          />
        </a>
        Weekly Forcast
      </span>
      <span style={{ fontSize: "17px" }}>
        <Icon
          type="dot-chart"
          style={{ marginRight: "2px", fontSize: 25, color: "#61cfd8" }}
        />
        Specific Date :
        <DatePicker
          size="small"
          placeholder="select the date"
          onChange={(date, dateString) => {
            getSpecificWeather(date);
          }}
        />
      </span>
    </span>
  </div>
);
export default Forecasts;
