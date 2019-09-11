import React from 'react';
import { Form, Button } from 'semantic-ui-react'

class SignupForm extends React.Component {

    state = {
        username: "",
        email: "",
        dob: 0, 
        password: ""
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleChangeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handleChangeDob = (event) => {
        this.setState({dob: event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }


    render() {
    return (
        <Form onSubmit={() => this.props.handleSubmit(this.state)}>
            <Form.Field>
            <label>Username</label>
            <input value={this.state.username} onChange={this.handleChangeUsername} placeholder='Username' />
            </Form.Field> 
            <Form.Field>
            <label>Email</label>
            <input value={this.state.email} onChange={this.handleChangeEmail} type="email" placeholder='Email' />
            </Form.Field>
            <Form.Field>
            <label>Date of Birth</label>
            <input value={this.state.dob} onChange={this.handleChangeDob} type="date" placeholder='Date of Birth' />
            </Form.Field>
            <Form.Field>
            <label>Password</label>
            <input value={this.state.password} onChange={this.handleChangePassword}type='password' placeholder='Password' />
            </Form.Field>
            <Button type='submit'>Sign up</Button>
        </Form>
    );
    }
};

export default SignupForm;



// edit form to take in correct format of dob
