import React, { Component } from "react";
import {Navbar,Container,Nav} from 'react-bootstrap'

export class Header extends Component {
  render() {
    return (

      <Navbar 
      bg="light" 
      style={{padding:"2rem" , fontSize:"1.5rem"}}
      variant="info">
        <Container>
          <Navbar.Brand href="#home">401_EXAM_SAADOUN_Cocktail_App</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/favorite">Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
