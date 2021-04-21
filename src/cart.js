import React from "react";

const Cart = ({ totalItems, items }) => {
  const total = () => {
    //console.log(items)
    items.map((item) => {
      let value = Object.values(item.price);
      let prices = value.join("");
      let newArr = [];
      return newArr.push(prices);
      
    });
  };
  total();

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {items.length < 1 ? (
          `You have no items in your cart`
        ) : (
          <p>Cart Items {totalItems}</p>
        )}
      </div>

      <div>
        {items.map((item, i) => (
          <li key={i}>{item.title} </li>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {items.length < 1 ? (
          `Total Price of goods $0.00`
        ) : (
          <p>Total Price of goods </p>
        )}
      </div>
    </>
  );
};

export default Cart;
