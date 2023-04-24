import React, { useEffect, useRef } from "react";
import "../styles/allProduct.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteProduct,
  handleAddProducts,
  removeFromCart,
  removeSort,
  selectedProduct,
  sortByPrice,
  updateProduct,
} from "../actions/action";
import ProductList from "./ProductList";
import Loading from "./Loading";
import { useToasts } from "react-toast-notifications";

function AllProductsPage() {
  const dispatch = useDispatch();
  const ref = useRef();
  const { addToast } = useToasts();
  const products = useSelector((state) => state.productReducer.productList);
  const cartItems = useSelector((state) => state.productReducer.cart);
  console.log(products);

  useEffect(() => {
    dispatch(handleAddProducts());
  }, [dispatch]);

  function addProductToCart(product) {
    dispatch(addToCart(product));
    addToast("Product Added To Cart Successfully", {
      appearance: "success",
    });
  }

  function handleSelectProduct(product) {
    dispatch(selectedProduct(product));
  }

  function handleSortByPrice(products) {
    dispatch(sortByPrice(products));
    ref.current.style.display = "block";
    addToast("Products Sorted By Price Successfully", {
      appearance: "success",
    });
  }

  function handleRemoveSortByPrice() {
    dispatch(removeSort());
    ref.current.style.display = "none";
    addToast("Sort By Price Filter Removed Successfully", {
      appearance: "info",
    });
  }

  function handleDeleteProduct(product) {
    dispatch(deleteProduct(product));
    addToast("Product Deleted From List", {
      appearance: "warning",
    });
  }

  function handleUpdateProduct(product, updatedDetail) {
    dispatch(updateProduct(product, updatedDetail));
    addToast("Product Updated Successfully", {
      appearance: "success",
    });
  }

  const isProductInCart = (product) => {
    const index = cartItems.indexOf(product);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  function handleRemoveProductFromCart(product) {
    dispatch(removeFromCart(product));
    addToast("Product Removed From Cart Successfully", {
      appearance: "success",
    });
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
          handleRemoveSortByPrice();
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
                handleUpdateProduct={handleUpdateProduct}
                isProductInCart={isProductInCart}
                handleRemoveProductFromCart={handleRemoveProductFromCart}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

export default AllProductsPage;
