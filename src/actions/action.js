// action types
export const ADD_TO_CART = "ADD_TO_CART";

// action creators
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    product,
  };
};
