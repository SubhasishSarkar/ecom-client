import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const OrderCard = (props) => {
  const { products } = props;
  return (
    <div style={{ padding: "5px" }}>
      <Card className="list_item_wrapper">
        <Card.Body>
          <Card.Title>Order Id : {props.orderId}</Card.Title>
          <Card.Text>
            <strong>Order Placed on : {props.createdAt}</strong>
            <p>Status : {props.status}</p>
            <p>Address : {props.address}</p>
            <ListGroup>
              {products.map((item) => {
                return (
                  <ListGroup.Item>
                    <p>Product Id : {item.productId}</p>
                    <p>Quantity : {item.quantity}</p>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default OrderCard;
