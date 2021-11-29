import { ShopContext } from "../context/ShopContext";
import React, { useState, useEffect } from "react";
import OrderService from "../services/order.service";
import OrderCard from "./OrderCard";
import "../styles/list.css";

const OrderList = () => {
  const context = React.useContext(ShopContext);
  const [orders, setOrders] = useState("");
  const { user } = context;
  useEffect(() => {
    OrderService.getAllOrders(user._id, user.accessToken)
      .then((res) => {
        setOrders({ data: res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const orderslist = orders.data ? orders.data : [];
  return (
    <>
      <div className="list_container">
        <div className="list_wrapper">
          {orderslist.length > 0 ? (
            orderslist.map((item) => {
              console.log(item);
              return (
                <OrderCard
                  orderId={item._id}
                  createdAt={item.createdAt}
                  products={item.products}
                  status={item.status}
                  address={item.address}
                />
              );
            })
          ) : (
            <p>No order</p>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderList;
