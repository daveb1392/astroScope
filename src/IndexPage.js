import React, { Component } from 'react';
import ShowDailyHoroscope from './ShowDailyHoroscope.js';
import HoroscopesContainer from './HoroscopesContainer.js'

// const starsignsURL = "http://localhost:3000/starsigns"

class IndexPage extends Component {

    // state = {
    //     starsigns: [],
    //     usersStarSign: null,
    // }

    // componentDidMount() {
    //     fetch(starsignsURL)
    //     .then(resp => resp.json())
    //     .then(starsigns => this.setState({starsigns}))
    //     .then(() => this.findStarsignOfCurrentUser(this.state.starsigns))
    // }



    render() {
        // debugger
        return (
            <div>
                {
                
                this.props.user && !this.props.user.error ? 
                (<>
                    <ShowDailyHoroscope user={this.props.user} starsigns={this.props.starsigns} usersStarSign={this.props.usersStarSign}/>
                    <HoroscopesContainer starsigns={this.props.starsigns} />
                </>)
                : (<>
                    <HoroscopesContainer starsigns={this.props.starsigns} />
                </>)
                }
            </div>
        );
    }
}

export default IndexPage;