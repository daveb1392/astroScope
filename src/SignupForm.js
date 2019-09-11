import React from 'react';
import { Form, Button } from 'semantic-ui-react'

const SignupForm = ({submit}) => {
    return (
        <Form onSubmit={() => submit()}>
            <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
            </Form.Field>
            <Form.Field>
            <label>Email</label>
            <input type="email" placeholder='Email' />
            </Form.Field>
            <Form.Field>
            <label>Date of Birth</label>
            <input type="date" placeholder='Date of Birth' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Sign up</Button>
        </Form>
    );
};

export default SignupForm;



// edit form to take in correct format of dob
