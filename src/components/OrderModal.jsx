import React from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

const OrderModal = (props) => {
  return (
    <>
      <Button variant="primary" onClick={() => props.handleShow()}>
        Plcae Order
      </Button>

      <Modal show={props.show} onHide={() => props.handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <InputGroup.Text>Address</InputGroup.Text>
            <FormControl
              as="textarea"
              aria-label="Enter Address"
              value={props.address}
              onChange={(event) => props.handleChange(event)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => props.placeOrder()}>
            Confirm Order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default OrderModal;
