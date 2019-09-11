import React, { Component } from 'react';
import ShowDailyHoroscope from './ShowDailyHoroscope.js';
import HoroscopesContainer from './HoroscopesContainer.js'

const starsignsURL = "http://localhost:3000/starsigns"

class IndexPage extends Component {

    state = {
        starsigns: [] 
    }

    componentDidMount() {
        fetch(starsignsURL)
        .then(resp => resp.json())
        .then(starsigns => this.setState({starsigns}))
    }


    render() {
        return (
            <div>
                {
                this.props.user ? 
                (<>
                    <ShowDailyHoroscope user={this.props.user} starsigns={this.state.starsigns}/>
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