import React, { useEffect, useRef } from "react";
import "../styles/allProduct.css";
import { Link, useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteProduct,
  handleAddProducts,
  selectedProduct,
  sortByPrice,
} from "../actions/action";

function AllProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref = useRef();
  const products = useSelector((state) => state.productReducer.productList);
  console.log(products);

  useEffect(() => {
    dispatch(handleAddProducts());
  }, [dispatch]);

  function addProductToCart(product) {
    dispatch(addToCart(product));
  }

  function handleSelectProduct(product) {
    dispatch(selectedProduct(product));
  }

  function handleSortByPrice(products) {
    dispatch(sortByPrice(products));
    ref.current.style.display = "block";
  }

  function handleDeleteProduct(product) {
    dispatch(deleteProduct(product));
  }

  return (
    <div className="all-product-container">
      <button
        className="filter-btn"
        type="submit"
        onClick={() => {
          handleSortByPrice(products);
        }}
      >
        Sort By Price
      </button>
      <img
        className="cross-btn"
        ref={ref}
        src="https://i.ibb.co/60KKyQc/x-mark.png"
        alt="cross"
        onClick={() => {
          dispatch(handleAddProducts());
          ref.current.style.display = "none";
        }}
      />
      <div className="product-container">
        <Link to={`/productDetail/1`}>
          <img
            src="https://m.media-amazon.com/images/I/41T493g+UrL._SX307_BO1,204,203,200_.jpg"
            alt="product-img"
            // onClick={() => handleSelectProduct(product)}
          />
        </Link>
        <div className="product-left-container">
          <h1>Book</h1>
          <div className="rating">
            Rating : <StarRating starCount="2" />
            <span>2.0</span>
          </div>
          <div className="product-details">
            Lorem A bestseller since it was originally published in 1937, this
            hardcover edition of Napoleon Hill`s Think and Grow Rich teaches the
            famous Andrew Carnegie f
          </div>
        </div>
        <div className="product-right-container">
          <div className="price">Price: ₹500.00</div>
          <button className="blue-btn" type="submit">
            Edit
          </button>
          <button
            className="red-btn"
            type="submit"
            // onClick={() => handleDeleteProduct(product)}
          >
            Delete
          </button>
          <button
            className="blue-btn"
            type="submit"
            // onClick={() => {
            //   handleSelectProduct(product);
            //   return navigate(`/productDetail/${product.id}`);
            // }}
          >
            Product Details
          </button>
          <button
            className="trans-btn"
            type="submit"
            // onClick={() => addProductToCart(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      {products.map((product, index) => {
        return (
          <div key={index} id={product.id} className="product-container">
            <Link to={`/productDetail/${product.id}`}>
              <img
                src={product.image}
                alt="product-img"
                onClick={() => handleSelectProduct(product)}
              />
            </Link>
            <div className="product-left-container">
              <h1>{product.title}</h1>
              <div className="rating">
                Rating : <StarRating starCount={product.rating} />
                <span>{product.rating}.0</span>
              </div>
              <div className="product-details">{product.about}</div>
            </div>
            <div className="product-right-container">
              <div className="price">Price: ₹{product.price}.00</div>
              <button className="blue-btn" type="submit">
                Edit
              </button>
              <button
                className="red-btn"
                type="submit"
                onClick={() => handleDeleteProduct(product)}
              >
                Delete
              </button>
              <button
                className="blue-btn"
                type="submit"
                onClick={() => {
                  handleSelectProduct(product);
                  return navigate(`/productDetail/${product.id}`);
                }}
              >
                Product Details
              </button>
              <button
                className="trans-btn"
                type="submit"
                onClick={() => addProductToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProductsPage;
