import React from "react";

const Cart = ({ totalItems, items }) => {
  const []
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
    </>
  );
};

export default Cart;
