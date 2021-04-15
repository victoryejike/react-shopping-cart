import React from "react";

const Cart = ({ totalItems, items }) => {
  return (
    <>
      <div>
        <p>Cart Items {totalItems}</p>
        <p>Total</p>
      </div>

      <div>
        {items.map((item, i) => (
          <li key={i}>{item.title}</li>
        ))}
      </div>
      <div>Total Price of goods </div>
    </>
  );
};

export default Cart;
