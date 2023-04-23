// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const SELECT_PRODUCT = "SELECT_PRODUCT";
export const SORT_BY_PRICE = "SORT_BY_PRICE";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const ADD_PRODUCT_TO_LIST = "ADD_PRODUCT_TO_LIST";

// action creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECT_PRODUCT,
    product,
  };
};

export const sortByPrice = (products) => {
  return {
    type: SORT_BY_PRICE,
    products,
  };
};

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    product,
  };
};

export const addProductToList = (product) => {
  return {
    type: ADD_PRODUCT_TO_LIST,
    product,
  };
};

export const handleAddProducts = () => {
  return function (dispatch) {
    const url =
      "https://my-json-server.typicode.com/Shibaji121/products/products/";
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then((productList) => {
        dispatch(addProducts(productList));
      })
      .catch((error) => {
        console.error("FETCH ERROR:", error);
      });
  };
};

export const addProducts = (list) => {
  return {
    type: ADD_PRODUCTS,
    list,
  };
};
