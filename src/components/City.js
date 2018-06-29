import React from "react";
import PropTypes from "prop-types";

const City = ({ city, country }) => (
  <div>
    {city &&
      country && (
        <span
          style={{
            color: "#f9cd54",
            fontWeight: "bold",
            fontFamily: "junction-light",
            fontSize: "40px"
          }}
        >
          {city}, {country}
        </span>
      )}
  </div>
);

City.PropTypes = {
  city: PropTypes.string,
  country: PropTypes.string
};

City.defaultProps = {
  city: "Sydney",
  country: "AU"
};

export default City;
