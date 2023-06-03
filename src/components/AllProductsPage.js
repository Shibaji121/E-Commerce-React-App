import React, { useEffect } from "react";
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
import { toast } from "react-toastify";

function AllProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.productList);
  const cartItems = useSelector((state) => state.productReducer.cart);
  const isSorted = useSelector((state) => state.productReducer.isSorted);

  useEffect(() => {
    dispatch(handleAddProducts());
  }, [dispatch]);

  function addProductToCart(product) {
    dispatch(addToCart(product));
    toast.success("Product Added To Cart Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function handleSelectProduct(product) {
    dispatch(selectedProduct(product));
  }

  function handleSortByPrice(products) {
    dispatch(sortByPrice(products));
    toast.success("Products Sorted By Price Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function handleRemoveSortByPrice() {
    dispatch(removeSort());
    toast.success("Sort By Price Filter Removed Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function handleDeleteProduct(product) {
    dispatch(deleteProduct(product));
    toast.warning("Product Deleted From List", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  function handleUpdateProduct(product, updatedDetail) {
    dispatch(updateProduct(product, updatedDetail));
    toast.success("Product Updated Successfully", {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  // To check the product in cart or not
  const isProductInCart = (product) => {
    const index = cartItems.indexOf(product);
    if (index !== -1) {
      return true;
    }
    return false;
  };

  function handleRemoveProductFromCart(product) {
    dispatch(removeFromCart(product));
    toast.success("Product Removed From Cart Successfully", {
      position: toast.POSITION.TOP_CENTER,
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
      {isSorted ? (
        <img
          className="cross-btn"
          src="https://cdn-icons-png.flaticon.com/128/1617/1617543.png"
          alt="cross"
          onClick={() => {
            handleRemoveSortByPrice();
          }}
        />
      ) : (
        <></>
      )}

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
                isProductInCart={isProductInCart(product)}
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
