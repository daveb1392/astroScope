import React, { Component } from 'react';
import StarSign from './StarSign.js';
import { Card } from 'semantic-ui-react'

class HoroscopesContainer extends Component {

    render() {
        return (
            <Card.Group>
                {
                    this.props.starsigns.map(starsign => <StarSign starsign={starsign} />)
                }
             </Card.Group>
        );
    }
}

export default HoroscopesContainer;