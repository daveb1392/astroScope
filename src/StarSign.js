import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'


class StarSign extends Component {

    state = {
        clicked: true
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
    return (
        <Card color='violet' onClick={() => this.handleClick()}>
            {
                this.state.clicked ? 
                <>
                    <Card.Content>
                        <Image src={require(`../public/imgs/${this.props.starsign.name}.png`)} size='small' centered rounded/>
                    </Card.Content>
                    <Card.Content extra>
                        <Card.Header>{this.props.starsign.name}</Card.Header>
                    </Card.Content>
                </>
                :
                <>
                    <Card.Content>
                        <Card.Header>{this.props.starsign.name}</Card.Header>
                        <Card.Description>
                            {this.props.starsign.description}
                        </Card.Description>            
                    </Card.Content>
                </>
            }
        </Card>
            );
    };
}


export default StarSign;