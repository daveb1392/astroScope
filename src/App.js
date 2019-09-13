import React from 'react';
import './App.css';
import Navbar from './Navbar.js'
import API from './adapters/API.js'
import IndexPage from './IndexPage.js';
import SignupForm from './SignupForm.js';
import Login from './Login.js'
import StarSignShowPage from './StarSignShowPage.js';
import { Route, withRouter } from "react-router-dom";

const starsignsURL = "http://localhost:3000/starsigns"

class App extends React.Component {

  state = {
    user: null,
    starsigns: [],
    usersStarSign: null
  }
  
  componentDidMount() {
    API.validateUser()
    .then(user => {
      this.setState({user})
    })

    fetch(starsignsURL)
    .then(resp => resp.json())
    .then(starsigns => this.setState({starsigns}))
    .then(() => this.findStarsignOfCurrentUser(this.state.starsigns))

  }

  findStarsignOfCurrentUser = (starsigns) => {
    if (!this.props.user) return
   // debugger
   const usersStarSign = starsigns.find(starsign => starsign.id === this.props.user.starsign_id)
   this.setState({usersStarSign: usersStarSign})
}

  signUp = user => {
    API.signUp(user)
    .then(user => this.setState({user}))
    this.props.history.push("/")
  }

  logIn = user => {
    API.logIn(user)
    .then(user => this.setState({user}))
    this.props.history.push("/")
  }

  logOut = () => {
    API.clearToken()
    this.setState({user: null})
    this.props.history.push("/")
  }


    render() {
      return (
      <div className="App">
        
        <Navbar user={this.state.user} logOut={this.logOut} />

        <Route exact path='/' component={() => <IndexPage user={this.state.user} starsigns={this.state.starsigns} usersStarSign={this.state.usersStarSign} />} />
        <Route path="/login" component={(props) => <Login {...props} handleSubmit={this.logIn} />}/>
        <Route path="/signup" component={(props) => <SignupForm {...props} handleSubmit={this.signUp} />}/> 
        <Route path={["/:starsign"]} component={(props) => <StarSignShowPage {...props} starsigns={this.state.starsigns} />}/> 
        
      </div>
  );
}
}

export default withRouter(App);
