import React from 'react';
import { Form, Button } from 'antd';
const FormItem = Form.Item;

const InputForm = () => (

    <Form layout="inline" onSubmit={() => { }}>
        <FormItem label="city">

        </FormItem>
        <FormItem label="country">

        </FormItem>
        <FormItem>
            <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
    </Form>

);

export default InputForm;