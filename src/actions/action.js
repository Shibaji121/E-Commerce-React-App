// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const ADD_PRODUCTS = "ADD_PRODUCTS";

// action creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
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
