import React, { Component } from "react";
import { Modal, Button , Form} from "react-bootstrap";
export class FavModal extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Drinks</Modal.Title>
        </Modal.Header>

        <Modal.Body>


          <Form  onSubmit={this.props.updateDrink}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update strDrink </Form.Label>
              <Form.Control type="text" defaultValue={this.props.strDrink} name="name"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Update strDrinkThumb </Form.Label>
              <Form.Control type="text"  defaultValue={this.props.strDrinkThumb} name="img"/>
            </Form.Group>


            <Button variant="info" type="submit">
              Update
            </Button>
          </Form>


        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default FavModal;
