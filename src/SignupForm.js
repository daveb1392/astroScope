import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const SignupForm = () => {
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
            <label>Date of Birth</label>
            <input tybe="number" placeholder='Date of Birth' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Sign up</Button>
        </Form>
    );
};

export default SignupForm;



// edit form to take in correct format of dob
