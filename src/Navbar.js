import React, { Component } from 'react';
import { List, Button, Header } from 'semantic-ui-react'

import { Route, NavLink } from "react-router-dom";
 

const Navbar = ({user, signUp, logIn, logOut}) => {
    
        return (
          <nav>
            <br/>
              <Header centered horizontal>
                <NavLink to="/" exact>
                <h1 className="title" >Daily AstroScopes</h1>
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
                <br/>
              </>
            )}
             
            <br />
        
          </nav>
        );

}

export default Navbar