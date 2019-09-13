import React from 'react';
import { Header, Card, Image } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";


class StarSignShowPage extends React.Component {

    state = {
        starSignInfo: null
    }

    componentDidMount(){
       const starSignInfo = this.props.starsigns.find(starsign => starsign.name === this.props.match.params.starsign) 
       this.setState({starSignInfo})
    }

    render() {

        let start_date = new Date(!this.state.starSignInfo ? null : this.state.starSignInfo.date_start);
        let end_date = new Date(!this.state.starSignInfo ? null : this.state.starSignInfo.date_end);
       
        let f_start_date = (start_date.getDate() + "/" + (start_date.getMonth()+1) )
        let f_end_date = end_date.getDate() + "/" + (end_date.getMonth()+1);
        
        return (
            <div>
                <br/>
                 <Card color='violet' centered fluid>
                    <Card.Content>
                    <Image
                        centered horizontal
                        size='tiny'
                        src={!this.state.starSignInfo ? null : require(`../public/imgs/${this.state.starSignInfo.name}.png`)}
                    
                    />
                    <br/>
                    <br/>
                    <br/>
                    <Card.Header><h3>{!this.state.starSignInfo ? null : this.state.starSignInfo.name}</h3></Card.Header>
                    <Card.Meta> {f_start_date} - {f_end_date} </Card.Meta>
                    <Card.Description>
                        {!this.state.starSignInfo ? null : this.state.starSignInfo.description}
                    </Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}



    export default StarSignShowPage;