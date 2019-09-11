import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const Login = () => {
    return (
        <Form>
            <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input placeholder='Email' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Login</Button>
        </Form>
    );
};

export default Login;

// edit form to take in correct format of dob