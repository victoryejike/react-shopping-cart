import React, { useState } from "react";
import Cart from "./cart";

const Products = () => {
  const [products, setProducts] = useState([
    {
      title: "Peru Hair",
      image: "https://p.globalsources.com/IMAGES/PDT/BIG/349/B1173831349.jpg",
      price: "$25.99"
    },
    {
      title: "Bournvita",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0dK6wt1-PqSmEzWF9iEnVCeprh8J1owbQg&usqp=CAU",
      price: "$5.79"
    },
    {
      title: "Cheese",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREBMxCoF_uAXtDvu1DJ5iwGXVIaMzqRVb6Uw&usqp=CAU",
      price: "$2.49"
    },
    {
      title: "Soda",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-L7eYOSaEUhNNLuFhFstW73LCxHqcteLfA&usqp=CAU",
      price: "$4.59"
    }
  ]);

  const imageStyles = {
    width: "100px",
    height: "120px"
  };

  const spanFlex = {
    marginRight: "25px"
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between"
        }}
      >
        {products.map((product, i) => (
          <div key={i}>
            <img src={product.image} style={imageStyles} />
            <div>
              <span style={spanFlex}>{product.title}</span>
              <span>{product.price}</span>
            </div>
            <button type="submit" style={{ marginTop: "15px" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Cart />
    </>
  );
};

export default Products;
