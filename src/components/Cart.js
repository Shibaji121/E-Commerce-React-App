import React from "react";
import "../styles/cart.css";

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
          <div>Rating: 4</div>
          <div>Price: ₹500.00</div>
          <button type="submit">Remove</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
