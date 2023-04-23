import { ADD_PRODUCTS, ADD_TO_CART } from "../actions/action";

const initialProductState = {
  cart: [],
  productList: [],
};

export default function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        productList: action.list,
      };
    default:
      return state;
  }
}
