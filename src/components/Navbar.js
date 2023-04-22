import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="left-nav">
        <div>
          <Link to="/">
            <img
              src="https://png.pngtree.com/png-vector/20220207/ourlarge/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
              alt="brand-logo"
              style={{ width: "10rem", height: "6rem" }}
            />
          </Link>
        </div>
        <Link to="/">
          <div>Products</div>
        </Link>
        <div>Add a Product</div>
        <Link to="/add-product">
          <img
            src="https://i.ibb.co/WGKNKzF/plus.png"
            alt="plus-icon"
            style={{ marginLeft: "-30px" }}
          />
        </Link>
      </div>
      <div className="right-nav">
        <Link to="/cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
            alt="cart-img"
          />
          <span className="cart-count">0</span>
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9408/9408175.png"
          alt="profile-img"
        />
        <span>My Profile</span>
      </div>
    </nav>
  );
}

export default Navbar;
