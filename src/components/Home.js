import React, { Component } from "react";
import {Row,Container,Col} from 'react-bootstrap'
import axios from "axios";
import HomeCards from "./HomeCards";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount = () => {
    // let Url = `http://localhost:8000/getAllDrinks`;
    let Url = `https://exam-back-saadoun.herokuapp.com/getAllDrinks`;
    axios
      .get(Url)
      .then((result) => {
        this.setState({
          drinks: result.data,
        });
      })
      .catch((err) => {
        console.log("bad requiest ", err);
      });
  };


  // addToFav

  addToFav=(object)=>{
      // let Url = `http://localhost:8000/addToFav`;
      let Url = `https://exam-back-saadoun.herokuapp.com/addToFav`;
      axios.post(Url , object)
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log("bad requiest ", err);
      });
  }

  render() {
    return (
      <Container>
        <Row>
         

        {this.state.drinks.map((item ,idx)=>{
            return (
                <Col key={idx}>
                <HomeCards
                item={item}
                addToFav={this.addToFav}
                />
                
                </Col>
            )
        })}


        </Row>
      </Container>
    );
  }
}

export default Home;
