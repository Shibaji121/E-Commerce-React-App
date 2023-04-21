import React from "react";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="left-nav">
        <div>
          <img
            src="https://png.pngtree.com/png-vector/20220207/ourlarge/pngtree-e-letter-logo-ecommerce-shop-store-design-png-image_4381099.png"
            alt="brand-logo"
            style={{ width: "10rem", height: "6rem" }}
          />
        </div>
        <div>Products</div>
        <div>Add a Product</div>
        <img
          src="https://i.ibb.co/WGKNKzF/plus.png"
          alt="plus-icon"
          style={{ marginLeft: "-30px" }}
        />
      </div>
      <div className="right-nav">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
          alt="cart-img"
        />
        <span className="cart-count">0</span>
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
