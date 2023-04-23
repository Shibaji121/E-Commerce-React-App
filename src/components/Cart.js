import React from "react";
import "../styles/cart.css";
import StarRating from "./StarRating";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((state) => state.productReducer.cart);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <h1>Hey Buddy..!! Add Some item to your Bucket</h1>
      ) : (
        <>
          <h1 style={{ textAlign: "center" }}>Your Bucket List</h1>
          <div className="cart-items">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="cart-container">
                  <img src={item.image} alt="product-img" />
                  <div className="product-detail">
                    <div style={{ color: "red" }}>{item.title}</div>
                    <div className="rating">
                      Rating : <StarRating starCount={item.rating} />
                      <span>{item.rating}.0</span>
                    </div>
                    <div>Price: ₹{item.price}.00</div>
                    <button type="submit">Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
