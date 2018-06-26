import React from 'react';
import { Form, Button, Icon } from 'antd';
import Input from '../elements/Input'

const FormItem = Form.Item;

const InputForm = () => (

    <Form layout="inline" onSubmit={() => { }}>
        <FormItem>
            <Input
                placeholder="city"
                onChange={() => { }}
                placement="topLeft"
                size="large"
            />
        </FormItem>

        <FormItem>

            <Input
                placeholder="country"
                onChange={() => { }}
                size="large"
            />
        </FormItem>
        <FormItem>
            <Button shape="circle" icon="search" size="large" />
            {/*<Button shape="circle" loading /> change to this when you click on submit
            means we need a loading state...*/}

        </FormItem>
    </Form>

);

export default InputForm;