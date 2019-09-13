import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react'
import API from './adapters/API.js'

class ShowDailyHoroscope extends React.Component {

    state = {
        todaysHoroscope: null

    }
   
    handleGetHoroscope = (user) => {
        API.getHoroscope(user)
        .then(todaysHoroscope => this.setState({todaysHoroscope}))
    }

    render(){
        // debugger
    return (
        <div>
        <>
        {
            !!this.state.todaysHoroscope ?
            (
                <>
                <Card color='violet' centered>
                    <Card.Content>
                    <Image
                        floated='right'
                        size='mini'
                        src={!this.props.usersStarSign ? null : require(`../public/imgs/${this.props.usersStarSign.name}.png`)}
                    />
                    <Card.Header>{!this.props.usersStarSign ? null : this.props.usersStarSign.name}</Card.Header>
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
                <>
                <Button onClick={() => this.handleGetHoroscope(this.props.user)} animated='fade'>
                    <Button.Content visible>Today's horoscope</Button.Content>
                    <Button.Content hidden>Find out here</Button.Content>
                </Button>
                <br/>
                <br/>
                </>
            )

        }
        </>
        </div>
    );
    }
};

export default ShowDailyHoroscope;