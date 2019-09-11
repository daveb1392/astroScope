import React, { Component } from 'react';
import SignupForm from './SignupForm.js';
import Login from './Login.js'
import IndexPage from './IndexPage.js';
import { List } from 'semantic-ui-react'

import { Route, NavLink } from "react-router-dom";
 

const Navbar = ({user, signUp, logIn, logOut}) => {
    
        return (
          <nav>
            { user ? (
              <div>
                <button onClick={logOut}>Log out</button>
              </div>
            ) : (
              <>
                <List floated="left" horizontal>
                  <List.Item>
                    <NavLink to="/signup" exact>
                      Sign up
                    </NavLink>
                  </List.Item>
                  <List.Item>
                    <NavLink to="/login" exact>
                      Login
                    </NavLink>
                  </List.Item>
                </List>

                <List centered horizontal>
                  <List.Item>
                    <NavLink to="/" exact>
                      <h1>Daily AstroScopes</h1>
                    </NavLink>
                  </List.Item>
                </List>
              </>
            )}
             
            <br />
            {/* <List floated='right' horizontal>
            <List.Item><NavLink
                to="/logout"
                exact
                >Log out</NavLink>
            </List.Item>
            </List> */}

            <Route exact path="/signup" component={(props) => <SignupForm {...props} handleSubmit={signUp} />} />
            <Route exact path="/login" component={(props) => <Login {...props} handleSubmit={logIn} />} />

            <br />
            <IndexPage />
          </nav>
        );

}

export default Navbar