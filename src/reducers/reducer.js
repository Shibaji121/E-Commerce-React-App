import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  SELECT_PRODUCT,
  SORT_BY_PRICE,
} from "../actions/action";

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
    case SORT_BY_PRICE:
      const parsePrice = (x) =>
        parseFloat(x.toString().replace(/^\$/, "")) || 0;
      const sortedProducts = action.products
        .slice()
        .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      return {
        ...state,
        productList: sortedProducts,
      };
    default:
      return state;
  }
}
