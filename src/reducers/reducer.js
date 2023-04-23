import { ADD_PRODUCTS, ADD_TO_CART, SELECT_PRODUCT } from "../actions/action";

const initialProductState = {
  cart: [],
  productList: [],
  product: {},
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
    case SELECT_PRODUCT:
      return {
        ...state,
        product: action.product,
      };
    default:
      return state;
  }
}
