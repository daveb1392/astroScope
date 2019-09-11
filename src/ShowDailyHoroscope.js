import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import API from './adapters/API.js'

class ShowDailyHoroscope extends React.Component {

    state = {
        todaysHoroscope: {},
        // starsignName: ""
    }

    // componentDidMount() {
    //     const starsignName = this.props.starsigns.find(starsign => starsign.id === this.props.user.starsign_id).name
    //     this.setState({starsignName})
    // }

    handleGetHoroscope = (user) => {
        API.getHoroscope(user)
        .then(todaysHoroscope => this.setState({todaysHoroscope}))
    }
    // require(`../public/imgs/${this.state.starsignName}.png`
    render(){
        // debugger
    return (
        <div>
        <Button onClick={() => this.handleGetHoroscope(this.props.user)} animated='fade'>
            <Button.Content visible>Today's horoscope</Button.Content>
            <Button.Content hidden>Find out here</Button.Content>
        </Button>
        <>
        {
            this.state.todaysHoroscope ?
            (
                <>
                <br/>
                
                <Card centered>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={null}
                    />
                    <Card.Header>Today's Horoscope</Card.Header>
                    <Card.Meta>{this.state.todaysHoroscope.date}</Card.Meta>
                    <Card.Description>
                        {this.state.todaysHoroscope.content} 
                    </Card.Description>
                    </Card.Content>
                </Card>
                <br/>
                <br/>
                </>
            ) : (
                <br/>
            )

        }
        </>
        </div>
    );
    }
};

export default ShowDailyHoroscope;