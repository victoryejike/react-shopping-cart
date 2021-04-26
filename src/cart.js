import React from "react";

const Cart = ({ totalItems, items }) => {
  const mapItems = items.map((item) => item.price * item.count);

  const totalArr = () => {
    console.log(mapItems);
    let total = [];
    let setTotal = total.concat(mapItems);
    console.log(setTotal);
    return setTotal;
  };

  const cartTotal = () => {
    let cartPriceArr = totalArr();
    if (cartPriceArr < 1) return;
    let totalCartPrice = cartPriceArr.reduce((acc, currVal) => acc + currVal);
    console.log(totalCartPrice);
    return totalCartPrice;
  };

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
                $ {item.price * item.count}
              </span>
            }
          </li>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {items.length < 1
          ? `Total Price of goods $0.00`
          : "Total Price is $ " + cartTotal()}
      </div>
    </>
  );
};

export default Cart;
