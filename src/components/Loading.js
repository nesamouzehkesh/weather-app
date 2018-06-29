import React from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

const Loading = ({ loading }) => (
  <Button
    style={{ marginTop: "15px", opacity: ".2" }}
    shape="circle"
    loading
    size="large"
  />
);

Loading.PropTypes = {
  loading: PropTypes.bool
};

Loading.defaultProps = {
  loading: false
};

export default Loading;
