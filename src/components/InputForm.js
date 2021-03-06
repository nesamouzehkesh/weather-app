import React from "react";
import PropTypes from "prop-types";
import { Form, Button, Icon } from "antd";
import Input from "../elements/Input";

const FormItem = Form.Item;

const InputForm = ({ showWeekly, getWeather, weatherVisible }) => (
  <div>
    {!weatherVisible &&
      !showWeekly && (
        <Form layout="inline" onSubmit={getWeather}>
          <FormItem>
            <Input
              placeholder="city"
              placement="topLeft"
              size="large"
              id="city"
            />
          </FormItem>

          <FormItem>
            <Input placeholder="country" size="large" id="country" />
          </FormItem>
          <FormItem>
            <Button
              shape="circle"
              icon="search"
              size="large"
              htmlType="submit"
            />
            {/*<Button shape="circle" loading /> change to this when you click on submit
        means we need a loading state...*/}
          </FormItem>
        </Form>
      )}
  </div>
);

InputForm.PropTypes = {
  showWeekly: PropTypes.bool,
  weatherVisible: PropTypes.bool,
  getWeather: PropTypes.func
};

InputForm.defaultProps = {
  showWeekly: false,
  weatherVisible: false,
  getWeather: () => {}
};

export default InputForm;
