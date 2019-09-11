import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import API from './adapters/API.js'

import { Route } from "react-router-dom";


class App extends React.Component {

  state = {
    user: undefined
  }
  
  componentDidMount() {
    API.validateUser()
    .then(user => {
      this.setState({user})
    })
  }

  signUp = user => {
    API.signUp(user)
    .then(user => this.setState({user}))
  }

  logIn = user => {
    // debugger
    API.logIn(user)
    .then(user => this.setState({user}))
    // debugger
  }

  logOut = () => {
    API.clearToken()
    this.setState({user: undefined})
  }

  // getHoroscope = user => {
  //   API.getHoroscope(user)
  //   this.setState

  // }

    render() {
      return (
      <div className="App">
        <Route path="/" component={(props) => <Navbar {...props} user={this.state.user} signUp={this.signUp} logIn={this.logIn} logOut={this.logOut} />} /> 
      </div>
  );
}
}

export default App;
