import {Button, Checkbox, Form, Input} from 'antd';
import React, {useRef, useState} from 'react';

import useLogin from '@src/api_requests/useLogin';

import styles from './index.module.scss';

interface IProps {
    username: string;
    password: string;
}

const LoginPage = () => {
    const {handleEnter} = useLogin();

    const onFinish = (values: any) => {
        console.log('Success:', values);
        handleEnter.mutate({...values, subdomain: 'toto'});
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.boxContainer}>
                <h3>Login page</h3>
                <Form
                    name="basic"
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;
