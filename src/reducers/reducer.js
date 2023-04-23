import { ADD_TO_CART } from "../actions/action";

const initialProductState = {
  cart: [],
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    default:
      return state;
  }
};
