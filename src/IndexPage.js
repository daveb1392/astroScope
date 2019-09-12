import React, { Component } from 'react';
import ShowDailyHoroscope from './ShowDailyHoroscope.js';
import HoroscopesContainer from './HoroscopesContainer.js'

const starsignsURL = "http://localhost:3000/starsigns"

class IndexPage extends Component {

    state = {
        starsigns: [],
        usersStarSign: null,
    }

    componentDidMount() {
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

    render() {
        // debugger
        return (
            <div>
                {
                
                this.props.user && !this.props.user.error ? 
                (<>
                    <ShowDailyHoroscope user={this.props.user} starsigns={this.state.starsigns} usersStarSign={this.state.usersStarSign}/>
                    <HoroscopesContainer starsigns={this.state.starsigns} />
                </>)
                : (<>
                    <HoroscopesContainer starsigns={this.state.starsigns} />
                </>)
                }
            </div>
        );
    }
}

export default IndexPage;