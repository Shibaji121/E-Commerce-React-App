import {
  ADD_PRODUCTS,
  ADD_TO_CART,
  DELETE_PRODUCT,
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
    case DELETE_PRODUCT:
      const filteredArray = state.productList.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        productList: filteredArray,
      };
    default:
      return state;
  }
}
