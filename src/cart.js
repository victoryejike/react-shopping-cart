import React, { useEffect, useState } from "react";

const Cart = ({ totalItems, items }) => {
  const [priceTotal, setTotalPrice] = useState();

  function total() {
    console.log("i");
  }

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {items.length < 1 ? (
          `You have no item(s) in your cart`
        ) : (
          <p>Cart Items {totalItems}</p>
        )}
      </div>

      <div>
        {items.map((item, i) => (
          <li key={i}>
            {item.title}{" "}
            <span style={{ marginLeft: "12px" }}>{item.count}</span>
            {
              <span style={{ marginLeft: "20px" }}>
                {item.price * item.count}
              </span>
            }
          </li>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {items.length < 1 ? `Total Price of goods $0.00` : total()}
      </div>
    </>
  );
};

export default Cart;
