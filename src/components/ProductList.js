import React, { useState } from "react";
import StarRating from "./StarRating";
import { Link, useNavigate } from "react-router-dom";

function ProductList(props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [about, setAbout] = useState("");
  const navigate = useNavigate();

  function onclickSaveButton(product) {
    let updatedDetail = {
      title: title,
      price: price,
      rating: rating,
      about: about,
    };
    props.handleUpdateProduct(product, updatedDetail);
    setEditMode(false);
  }

  return (
    <>
      {editMode ? (
        <div
          key={props.product.id}
          id={props.product.id}
          className="product-container"
        >
          <Link to={`/productDetail/${props.product.id}`}>
            <img src={props.product.image} alt="product-img" />
          </Link>
          <div className="product-left-container">
            <input
              type="text"
              placeholder="Enter New Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="rating">
              Rating :
              <span>
                <input
                  type="number"
                  placeholder="Enter the New Rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />{" "}
              </span>
            </div>
            <div className="product-details">
              <textarea
                rows="6"
                cols="110"
                placeholder="Write the Updated Description about the product"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>
          </div>
          <div className="product-right-container">
            <div className="price">
              Price:{" "}
              <input
                type="number"
                placeholder="Enter the Updated Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <button
              className="green-btn"
              type="submit"
              onClick={() => onclickSaveButton(props.product)}
            >
              Save
            </button>
            <button
              className="red-btn"
              type="submit"
              onClick={() => {
                setEditMode(false);
              }}
            >
              Discard
            </button>
            <button
              className="blue-btn"
              type="submit"
              onClick={() => {
                props.handleSelectProduct(props.product);
                return navigate(`/productDetail/${props.product.id}`);
              }}
            >
              Product Details
            </button>
          </div>
        </div>
      ) : (
        <div
          key={props.product.id}
          id={props.product.id}
          className="product-container"
        >
          <Link to={`/productDetail/${props.product.id}`}>
            <img
              src={props.product.image}
              alt="product-img"
              onClick={() => props.handleSelectProduct(props.product)}
            />
          </Link>
          <div className="product-left-container">
            <h1>{props.product.title}</h1>
            <div className="rating">
              Rating : <StarRating starCount={props.product.rating} />
              <span>{props.product.rating}.0</span>
            </div>
            <div className="product-details">{props.product.about}</div>
          </div>
          <div className="product-right-container">
            <div className="price">Price: ₹{props.product.price}.00</div>
            <button
              className="blue-btn"
              type="submit"
              onClick={() => {
                setEditMode(true);
                setTitle(props.product.title);
                setPrice(props.product.price);
                setRating(props.product.rating);
                setAbout(props.product.about);
              }}
            >
              Edit
            </button>
            <button
              className="red-btn"
              type="submit"
              onClick={() => props.handleDeleteProduct(props.product)}
            >
              Delete
            </button>
            <button
              className="blue-btn"
              type="submit"
              onClick={() => {
                props.handleSelectProduct(props.product);
                return navigate(`/productDetail/${props.product.id}`);
              }}
            >
              Product Details
            </button>
            <button
              className="trans-btn"
              type="submit"
              onClick={() => props.addProductToCart(props.product)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductList;
