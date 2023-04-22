import React from "react";
import "../styles/addProduct.css";

function AddProduct() {
  return (
    <div className="add-product-container">
      <h1>Enter The Product Details</h1>
      <input type="text" placeholder="Enter Product Name" />
      <input type="link" placeholder="Paste The Product Image Link" />
      <input type="number" placeholder="Enter Product Price" />
      <input type="text" placeholder="Enter Product Rating" />
      <textarea rows="4" cols="100" placeholder="Description about Product" />
      <button type="submit">Add Product</button>
    </div>
  );
}

export default AddProduct;
