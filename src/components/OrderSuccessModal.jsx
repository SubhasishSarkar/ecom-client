import { React } from "react";
import { Modal } from "react-bootstrap";
function OrderSuccessModal(props) {
  return (
    <Modal
      size="sm"
      show={props.show}
      onHide={() => props.setSuccessHide(false)}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
          Order Confirm
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Order Id : {props.orderId}</Modal.Body>
    </Modal>
  );
}

export default OrderSuccessModal;
