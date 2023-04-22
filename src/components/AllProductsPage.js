import React, { useState, useEffect } from "react";
import "../styles/allProduct.css";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/Shibaji121/products/products/";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((productList) => {
        setProducts(productList);
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });
  }, []);

  return (
    <div className="all-product-container">
      {products.map((product, index) => {
        return (
          <div key={index} id={product.id} className="product-container">
            <img src={product.image} alt="product-img" />
            <div className="product-left-container">
              <h1>{product.title}</h1>
              <div className="rating">Rating: {product.rating}</div>
              <div className="product-details">{product.about}</div>
            </div>
            <div className="product-right-container">
              <div className="price">Price: ₹{product.price}.00</div>
              <button className="blue-btn" type="submit">
                Edit
              </button>
              <button className="red-btn" type="submit">
                Delete
              </button>
              <button className="blue-btn" type="submit">
                Product Details
              </button>
              <button className="trans-btn" type="submit">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProductsPage;
