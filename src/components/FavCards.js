import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
export class FavCards extends Component {
    render() {
        return (
            <Card style={{ width: '15rem',margin:"1rem" }}>

            <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
            <Card.Body>
              <Card.Title>{this.props.item.strDrink}</Card.Title>
            </Card.Body>

            <Card.Footer className="text-muted">

            <Button 
              variant="danger"
              style={{ marginLeft:"1rem",  width:'5rem'}}
              onClick={()=>this.props.DeleteFromDB(this.props.item._id)}
              >
              Delete
             </Button>

            <Button 
              variant="info"
              style={{ marginLeft:"1rem",  width:'5rem'}}
              onClick={()=>this.props.showFun(this.props.item)}
              >
              Update
             </Button>

            </Card.Footer>

          </Card>
        )
    }
}

export default FavCards
