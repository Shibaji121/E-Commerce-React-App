import React from "react";
import "../styles/productDetail.css";

function ProductDetail() {
  return (
    <div className="product-details-page">
      <h1 className="heading">Product Details Page</h1>
      <div className="details-container">
        <img
          src="https://m.media-amazon.com/images/I/411kGNBQ4AL._AC_SX569_.jpg"
          alt="product-img"
        />
        <div className="details">
          <h1>Product Title</h1>
          <div>Rating: 4</div>
          <div>Price: ₹500.00</div>
          <div style={{ color: "darkviolet" }}>
            Product Description:
            <div style={{ color: "black" }}>
              The full-size Logitech Wireless Mouse M510 gives you more control,
              so you can do more with your mouse. The contoured shape with soft
              rubber grips gives you the support you need for all-day comfort.
              And you can do more, faster with three standard buttons,
              Back/Forward buttons and side-to-side scrolling plus zoom.2 AA
              batteries.
            </div>
          </div>
          <button className="add-cart-btn" type="submit">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
