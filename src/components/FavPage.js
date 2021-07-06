import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import FavCards from "./FavCards";
import FavModal from "./FavModal";
export class FavPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favDrinks: [],
      show: false,
      strDrink: "",
      strDrinkThumb: "",
      id: -1,
    };
  }

  componentDidMount = () => {
    // let Url = `http://localhost:8000/getAllFavDrinks`;
    let Url = `https://exam-back-saadoun.herokuapp.com/getAllFavDrinks`;
    axios
      .get(Url)
      .then((result) => {
        this.setState({
          favDrinks: result.data,
        });
      })
      .catch((err) => {
        console.log("bad requiest ", err);
      });
  };

  //======> DeleteFromDB
  DeleteFromDB = (id) => {
   
    // let Url = `http://localhost:8000/DeleteFromDB/${id}`;
    let Url = `https://exam-back-saadoun.herokuapp.com/DeleteFromDB/${id}`;
    axios
      .delete(Url)
      .then((result) => {
        this.setState({
          favDrinks: result.data,
        });
      })
      .catch((err) => {
        console.log("bad requiest ", err);
      });
  };

  // =========> update data
  showFun = async (obj) => {
    await this.setState({
      show: true,
      strDrink: obj.strDrink,
      strDrinkThumb: obj.strDrinkThumb,
      id: obj._id,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  updateDrink = async (event) => {
    event.preventDefault();

    const object = {
      id: this.state.id,
      strDrink: event.target.name.value,
      strDrinkThumb: event.target.img.value,
    };
    // let Url = `http://localhost:8000/updateDrink`;
    let Url = `https://exam-back-saadoun.herokuapp.com/updateDrink`;
    axios
      .put(Url, object)
      .then((result) => {
        this.setState({
          favDrinks: result.data,
          show: false,
        });
      })
      .catch((err) => {
        console.log("bad requiest ", err);
      });
  };

  render() {
    return (
      <Container>
        <Row>
          {this.state.favDrinks.map((item, idx) => {
            return (
              <Col key={idx}>
                <FavCards
                  item={item}
                  DeleteFromDB={this.DeleteFromDB}
                  showFun={this.showFun}
                />
              </Col>
            );
          })}
        </Row>

        {/* update and delete fav */}
        <FavModal
          show={this.state.show}
          handleClose={this.handleClose}
          strDrink={this.state.strDrink}
          strDrinkThumb={this.state.strDrinkThumb}
          updateDrink={this.updateDrink}
        />
      </Container>
    );
  }
}

export default FavPage;
