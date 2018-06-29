import React from "react";
import PropTypes from "prop-types";
import { Icon } from "antd";

const Back = ({ backHandler }) => (
  <span style={{ marginLeft: "40px" }}>
    <a
      onClick={() => backHandler()}
      style={{
        color: "rgb(0, 0, 0)",
        fontSize: "20px",
        fontFamily: "junction-light"
      }}
    >
      <Icon type="caret-left" style={{ fontSize: 40, color: "#61cfd8" }} />
      Back
    </a>
  </span>
);

Back.propTypes = {
  backHandler: PropTypes.func.isRequired
};

Back.defaultProps = {
  backHandler: () => {}
};

export default Back;
