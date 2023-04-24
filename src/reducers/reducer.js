import {
  ADD_PRODUCTS,
  ADD_PRODUCT_TO_LIST,
  ADD_TO_CART,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  REMOVE_SORT,
  SELECT_PRODUCT,
  SORT_BY_PRICE,
  UPDATE_PRODUCT,
} from "../actions/action";

const initialProductState = {
  cart: [],
  productList: [],
  product: {},
  beforeSortList: [],
  isInCart: false,
  noRefetch: false,
  isSorted: false,
};

export default function productReducer(state = initialProductState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.product],
        isInCart: true,
        noRefetch: true,
      };

    case ADD_PRODUCTS:
      if (state.noRefetch || state.isSorted) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        productList: action.list,
        noRefetch: true,
      };

    case SELECT_PRODUCT:
      const index = state.cart.indexOf(action.product);
      if (index !== -1) {
        return {
          ...state,
          product: action.product,
          isInCart: true,
        };
      }
      return {
        ...state,
        product: action.product,
        isInCart: false,
      };

    case SORT_BY_PRICE:
      const parsePrice = (x) =>
        parseFloat(x.toString().replace(/^\$/, "")) || 0;
      const sortedProducts = action.products
        .slice()
        .sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      return {
        ...state,
        beforeSortList: state.productList,
        productList: sortedProducts,
        noRefetch: false,
        isSorted: true,
      };

    case REMOVE_SORT:
      return {
        ...state,
        productList: state.beforeSortList,
        isSorted: false,
      };

    case DELETE_PRODUCT:
      const filteredArray = state.productList.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        productList: filteredArray,
        noRefetch: false,
      };

    case ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        productList: [action.product, ...state.productList],
        noRefetch: true,
      };

    case UPDATE_PRODUCT:
      let updatedProductList = state.productList.map((product) => {
        if (product.id === action.product.id) {
          product.title = action.updatedDetail.title;
          product.price = action.updatedDetail.price;
          product.rating = action.updatedDetail.rating;
          product.about = action.updatedDetail.about;
        }
        return product;
      });
      return {
        ...state,
        productList: updatedProductList,
      };

    case REMOVE_FROM_CART:
      const filteredCartArray = state.cart.filter(
        (product) => product.id !== action.product.id
      );
      return {
        ...state,
        cart: filteredCartArray,
        noRefetch: true,
        isInCart: false,
      };

    default:
      return state;
  }
}
