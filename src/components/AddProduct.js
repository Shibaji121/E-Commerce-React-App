import React, { useState } from "react";
import "../styles/addProduct.css";
import { useDispatch } from "react-redux";
import { addProductToList } from "../actions/action";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState("");
  const [about, setAbout] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  // function to add product
  function handleAddProduct() {
    let id = Date.now();
    const product = {
      id: id,
      title: title,
      image: imgLink,
      price: price,
      rating: rating,
      about: about,
    };
    dispatch(addProductToList(product));
    addToast("Product Added Successfully", {
      appearance: "success",
    });
    return navigate("/");
  }

  return (
    <div className="add-product-container">
      <h1>Enter The Product Details</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="link"
        placeholder="Paste The Product Image Link"
        onChange={(e) => setImgLink(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter Product Price"
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Product Rating"
        onChange={(e) => setRating(e.target.value)}
      />
      <textarea
        rows="4"
        cols="100"
        placeholder="Description about Product"
        onChange={(e) => setAbout(e.target.value)}
      />
      <button type="submit" onClick={() => handleAddProduct()}>
        Add Product
      </button>
    </div>
  );
}

export default AddProduct;
