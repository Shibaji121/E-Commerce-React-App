import React, { useState, useEffect } from "react";
import "../styles/allProduct.css";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/action";

function AllProductsPage() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

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

  function addProductToCart(product) {
    // console.log(product);
    dispatch(addToCart(product));
  }

  return (
    <div className="all-product-container">
      <button className="filter-btn" type="submit">
        Sort By Price
      </button>
      {products.map((product, index) => {
        return (
          <div key={index} id={product.id} className="product-container">
            <Link to={`/productDetail/${product.id}`}>
              <img src={product.image} alt="product-img" />
            </Link>
            <div className="product-left-container">
              <h1>{product.title}</h1>
              <div className="rating">
                Rating : <StarRating starCount={product.rating} />
                <span>{product.rating}.0</span>
              </div>
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
              <button
                className="trans-btn"
                type="submit"
                onClick={() => addProductToCart(product)}
              >
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
