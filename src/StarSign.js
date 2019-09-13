import React, { Component } from 'react';
import { Card, Image, Button } from 'semantic-ui-react'
import API from './adapters/API.js'
import { NavLink, Link } from "react-router-dom";


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


    render() {
        const starSignName = this.props.starsign.name
        let start_date = new Date(this.props.starsign.date_start);
        let end_date = new Date(this.props.starsign.date_end);
       
        let f_start_date = (start_date.getDate() + "/" + (start_date.getMonth()+1) )
        let f_end_date = end_date.getDate() + "/" + (end_date.getMonth()+1);
        // let f_start_date = 
// debugger
        return(
          <Card color="blue" onClick={() => this.handleClick(this.props.starsign)}>
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
                  <Card.Header>{`Today's horoscope for ${this.props.starsign.name}`}</Card.Header>
                  <Card.Meta>{this.state.todaysStarSignHoroscope ? this.state.todaysStarSignHoroscope.date : null}</Card.Meta>
                  <Card.Description>
                    {this.state.todaysStarSignHoroscope ? this.state.todaysStarSignHoroscope.content : null}
                  </Card.Description>

                  <br/>
                  <br/>

                  <Button as={Link} to={`/${starSignName}`} >More info</Button>
                </Card.Content>
              </>
            )}
          </Card>
        );
    };
}


export default StarSign;