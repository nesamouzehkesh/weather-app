import React from "react";
import PropTypes from "prop-types";

const Weekly = ({ weekWeather }) => {
  function getDayOfWeek(date) {
    var dateFormat = new Date(date);
    var dayOfWeek = dateFormat.getDay();
    return isNaN(dayOfWeek)
      ? null
      : [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ][dayOfWeek];
  }

  return (
    <div style={{ display: "flex", marginTop: "15px", flexWrap: "wrap" }}>
      {weekWeather.map(day => (
        <div
          style={{
            color: "#d69d33",
            borderRadius: "3px",
            padding: "3px",
            display: "flex",
            flexDirection: "column",
            marginLeft: "20px",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.1)"
          }}
        >
          <p style={{ fontWeight: "bold", fontSize: "15px" }}>
            {getDayOfWeek(day.date)}, {day.date.split("-")[1]}/{" "}
            {day.date.split("-")[2]}
          </p>
          <p>
            <span style={{ fontWeight: "bold" }}>min:</span>
            {Number(day.min.toFixed(1))} -
            <span style={{ fontWeight: "bold" }}>max:</span>
            {Number(day.max.toFixed(1))}
          </p>
          <p>
            <span style={{ color: "#ef9c90" }}>
              precipitation: {day.precipitation}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

Weekly.PropTypes = {
  weekWeather: PropTypes.func.isRequired
};

Weekly.defaultProps = {
  weekWeather: () => {}
};
export default Weekly;
