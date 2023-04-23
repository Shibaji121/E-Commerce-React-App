import React, { useEffect } from "react";
import "../styles/productDetail.css";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/action";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const product = useSelector((state) => state.productReducer.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addProductToCart(product) {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    if (JSON.stringify(product) === "{}") {
      return navigate("/");
    }
  });

  return (
    <div className="product-details-page">
      <h1 className="heading">Product Details Page</h1>
      <div className="details-container">
        <img src={product.image} alt="product-img" />
        <div className="details">
          <h1>{product.title}</h1>
          <div className="rating">
            Rating : <StarRating starCount={product.rating} />
            <span>{product.rating}.0</span>
          </div>
          <div>Price: ₹{product.price}.00</div>
          <div style={{ color: "darkviolet" }}>
            Product Description:
            <div style={{ color: "black" }}>{product.about}</div>
          </div>
          <button
            className="add-cart-btn"
            type="submit"
            onClick={() => addProductToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
