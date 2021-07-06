import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
export class HomeCards extends Component {
    render() {
        return (
            <Card style={{ width: '15rem',margin:"1rem" }}>

            <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.item.strDrink}</Card.Title>
            </Card.Body>

            <Card.Footer className="text-muted">

            <Button 
              variant="info"
              style={{ marginLeft:"2rem",  width:'10rem'}}
              onClick={()=>this.props.addToFav(this.props.item)}
              >
              Add To Favorite
             </Button>

            </Card.Footer>

          </Card>
        )
    }
}

export default HomeCards
