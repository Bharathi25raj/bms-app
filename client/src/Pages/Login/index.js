// import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';


const Login = () => {

    

    return (
        <div className='flex justify-center items-center h-screen bg-primary'>
            <div className='card w-400 p-3'>

                <h1 className='text-xl mb-1'>Welcome Back! Please Login</h1>

                <hr />

                <Form layout='vertical' className='mt-1'>
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
                        <input type='text' />
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
                        <input type='password' />
                    </Form.Item>

                    <div className='flex flex-col mt-2 gap-1'>
                        <Button fullWidth title='LOGIN' type='submit' />
                        <Link to='/register'>{" "} Don't have an account? Register</Link>
                    </div>
                </Form>

            </div>
        </div>
    )
  
};


export default Login;