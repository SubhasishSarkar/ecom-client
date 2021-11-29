import { ShopContext } from "../context/ShopContext";
import React, { useState, useEffect } from "react";
import CartService from "../services/cart.service";
import OrderService from "../services/order.service";
import { Link } from "react-router-dom";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Button } from "@material-ui/core";
import "../styles/list.css";
import OrderModal from "./OrderModal";
import OrderSuccessModal from "./OrderSuccessModal";

const Cart = () => {
  const context = React.useContext(ShopContext);
  const { user, cart_id } = context;
  const [cart, setCart] = useState("");
  const [address, setAddress] = useState("");
  const [orderId, setOrderId] = useState("");
  const [successShow, setSuccessShow] = useState(false);

  const [show, setShow] = useState(false);

  function handleClose() {
    setShow(false);
  }
  function handleCloseSuccess() {
    setSuccessShow(false);
  }
  function handleShow() {
    setShow(true);
  }

  function handleChange(event) {
    setAddress(event.target.value);
  }

  useEffect(() => {
    CartService.getCart(user._id, user.accessToken)
      .then((res) => {
        setCart({ data: res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function clearCart() {
    return CartService.clearCart(user._id, user.accessToken)
      .then((res) => {
        setCart({ data: "" });
        context.setCartId("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function placeOrder() {
    const order = {
      cartId: cart_id,
      amount: 1000,
      address: address,
    };
    return OrderService.createOrder(user._id, { ...order }, user.accessToken)
      .then((res) => {
        setCart({ data: "" });
        setSuccessShow(true);
        setOrderId(res.data._id);
        context.setCartId("");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const products = cart.data ? cart.data.products : [];
  return (
    <div className="list_container">
      <OrderSuccessModal
        show={successShow}
        orderId={orderId}
        setSuccessHide={handleCloseSuccess}
      />
      {products.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<RemoveShoppingCartIcon />}
          onClick={() => clearCart()}
        />
      )}
      {products.length > 0 && (
        <OrderModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
          value={address}
          handleChange={handleChange}
          placeOrder={placeOrder}
        />
      )}
      <div className="list_wrapper">
        {products.length > 0 ? (
          products.map((item, i) => {
            return (
              <Link
                to={{
                  pathname: "/details/" + item.productId,
                }}
                key={item._id}
              >
                <div className="list_item_cart">
                  <div className="list_item_wrapper">
                    <div>Item : {i + 1}</div>
                    <div>Product Id : {item.productId}</div>
                    <div>Quantity : {item.quantity}</div>
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <strong>Cart is Empty</strong>
        )}
      </div>
    </div>
  );
};
export default Cart;
