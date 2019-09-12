import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import { getDefaultWatermarks } from 'istanbul-lib-report';
import API from './adapters/API.js'


class StarSign extends Component {

    state = {
        clicked: true,
        todaysStarSignHoroscope: null
    }

    handleClick = (starsign) => {
        this.setState({clicked: !this.state.clicked})
        API.getStarSignHoroscope(starsign)
        .then(todaysStarSignHoroscope => this.setState({todaysStarSignHoroscope}))
    }


    
    // handleGetStarSignHoroscope = (starsign) => {
    //     API.getStarSignHoroscope(starsign)
    //     .then(todaysStarSignHoroscope => this.setState({todaysStarSignHoroscope}))
    // }


    // <Button onClick={() => this.handleGetHoroscope(this.props.user)} animated='fade'>
    //                 <Button.Content visible>Today's horoscope</Button.Content>
    //                 <Button.Content hidden>Find out here</Button.Content>
    //             </Button>

    render() {

        let start_date = new Date(this.props.starsign.date_start);
        let end_date = new Date(this.props.starsign.date_end);
       
        let f_start_date = (start_date.getDate() + "/" + (start_date.getMonth()+1) )
        let f_end_date = end_date.getDate() + "/" + (end_date.getMonth()+1);
        // let f_start_date = 

        return(
          <Card color="violet" onClick={() => this.handleClick(this.props.starsign)}>
            {this.state.clicked ? (
              <>
                <Card.Content>
                  <Image
                    src={require(`../public/imgs/${this.props.starsign.name}.png`)}
                    size="small"
                    centered
                    rounded
                  />
                </Card.Content>
                <Card.Content extra>
                  <Card.Header>{this.props.starsign.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">
                      {f_start_date} - {f_end_date}
                    </span>
                  </Card.Meta>
                </Card.Content>
              </>
            ) : (
              <>
                <Card.Content>
                  <Card.Header>{`Today's horoscope for ${this.props.starsign.name}...`}</Card.Header>
                  <Card.Description>
                    {this.state.todaysStarSignHoroscope ? this.state.todaysStarSignHoroscope.content : null}
                  </Card.Description>
                </Card.Content>
              </>
            )}
          </Card>
        );
    };
}


export default StarSign;