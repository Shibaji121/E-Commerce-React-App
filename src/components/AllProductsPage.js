import React, { useEffect, useRef } from "react";
import "../styles/allProduct.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteProduct,
  handleAddProducts,
  selectedProduct,
  sortByPrice,
} from "../actions/action";
import ProductList from "./ProductList";
import Loading from "./Loading";

function AllProductsPage() {
  const dispatch = useDispatch();
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
      {products.length === 0 ? (
        <Loading />
      ) : (
        <>
          {products.map((product) => {
            return (
              <ProductList
                key={product.id}
                product={product}
                handleDeleteProduct={handleDeleteProduct}
                addProductToCart={addProductToCart}
                handleSelectProduct={handleSelectProduct}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default AllProductsPage;
