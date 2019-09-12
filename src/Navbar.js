import React, { Component } from 'react';
import { List, Button, Header } from 'semantic-ui-react'

import { Route, NavLink } from "react-router-dom";
 

const Navbar = ({user, signUp, logIn, logOut}) => {
    
        return (
          <nav>
              <Header centered horizontal>
                <NavLink to="/" exact>
                <h1>Daily AstroScopes</h1>
                </NavLink>
              </Header>

            { user && !user.error ? (
              <div>

                <Header floated="left" horizontal as='h4'>{` Logged in as ${user.username}`}</Header>
                <Button onClick={logOut} floated="right"  >
                  <Button.Content>Log out</Button.Content>
                </Button>
                
              </div>
            ) : (
              <>
                <Button floated="left" horizontal >
                  <Button.Content>
                    <NavLink to="/signup" exact>
                      Sign up
                    </NavLink>
                  </Button.Content>
                </Button>

                <Button floated="left" horizontal >
                  <Button.Content>
                    <NavLink to="/login" exact>
                      Login
                    </NavLink>
                  </Button.Content>
                </Button>
{/* 
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
                </List> */}

                {/* <List centered horizontal>
                  <List.Item>
                    <NavLink to="/" exact>
                      <h1>Daily AstroScopes</h1>
                    </NavLink>
                  </List.Item>
                </List> */}
              {/* <Route exact path="/signup" component={(props) => <SignupForm {...props} handleSubmit={signUp} />} />
              <Route exact path="/login" component={(props) => <Login {...props} handleSubmit={logIn} />} /> */}
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

            {/* <Route exact path="/signup" component={(props) => <SignupForm {...props} handleSubmit={signUp} />} />
            <Route exact path="/login" component={(props) => <Login {...props} handleSubmit={logIn} />} /> */}

            <br />
            {/* <IndexPage user={user}/> */}
          </nav>
        );

}

export default Navbar