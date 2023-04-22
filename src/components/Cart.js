import React from "react";
import "../styles/cart.css";
import StarRating from "./StarRating";

function Cart() {
  return (
    <div className="cart">
      <h1 style={{ textAlign: "center" }}>Your Bucket List</h1>
      <div className="cart-container">
        <img
          src="https://m.media-amazon.com/images/I/411kGNBQ4AL._AC_SX569_.jpg"
          alt="product-img"
        />
        <div className="product-detail">
          <div style={{ color: "red" }}>Product Title</div>
          <div className="rating">
            Rating : <StarRating starCount={2} />
            <span>{2}.0</span>
          </div>
          <div>Price: ₹500.00</div>
          <button type="submit">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
