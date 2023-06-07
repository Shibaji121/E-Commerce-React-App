import {
  ADD_PRODUCTS,
  ADD_PRODUCT_TO_LIST,
  ADD_TO_CART,
  ADD_TO_FAVOUR,
  DELETE_PRODUCT,
  REMOVE_FROM_CART,
  REMOVE_SORT,
  SEARCH_PRODUCT,
  SELECT_PRODUCT,
  SORT_BY_PRICE,
  UPDATE_PRODUCT,
} from "../actions/action";

const initialProductState = {
  cart: [],
  productList: [],
  product: {},
  beforeSortList: [],
  favourList: [],
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
    case SEARCH_PRODUCT:
      console.log(action.productName);
      const searchList = state.productList.filter(
        (product) => product.title === action.productName
      );
      console.log(searchList);
      return {
        ...state,
        productList: searchList,
        noRefetch: true,
      };

    case ADD_TO_FAVOUR:
      return {
        ...state,
        favourList: [action.product, ...state.favourList],
      };

    case ADD_PRODUCTS:
      if (state.noRefetch || state.isSorted) {
        return {
          ...state,
        };
      }
      const products = localStorage.getItem("products");
      if (products === null) {
        localStorage.setItem("products", JSON.stringify(action.list));
      }
      const productslist = JSON.parse(localStorage.getItem("products"));
      console.log(products);
      return {
        ...state,
        productList: productslist,
        noRefetch: true,
      };

    case SELECT_PRODUCT:
      const index = state.cart.indexOf(action.product);
      if (index !== -1) {
        return {
          ...state,
          product: action.product,
          isInCart: true,
          noRefetch: true,
        };
      }
      return {
        ...state,
        product: action.product,
        isInCart: false,
        noRefetch: true,
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
      localStorage.setItem("products", JSON.stringify(filteredArray));
      return {
        ...state,
        productList: filteredArray,
        noRefetch: false,
      };

    case ADD_PRODUCT_TO_LIST:
      // const list = state.productList;
      const updatedList = [action.product, ...state.productList];
      console.log(updatedList);
      localStorage.setItem("products", JSON.stringify(updatedList));
      return {
        ...state,
        productList: updatedList,
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
