import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import IndexPage from './IndexPage.js';

class Navbar extends Component {
    render() {
        return (
            <div>
            <SignupForm />
            <h1>Daily AstroScopes</h1>
            <IndexPage/>
                
            </div>
        );
    }
}

export default Navbar