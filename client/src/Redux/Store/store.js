import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addToCartReducers,
  arrivalProductReducers,
  featuredProductReducers,
  hotProductReducers,
  singleProductReducers,
} from "../Reducers/productReducers";

const rootReducers = combineReducers({
  featuredProducts: featuredProductReducers,
  arrivalProducts: arrivalProductReducers,
  hotProducts: hotProductReducers,
  singleProduct: singleProductReducers,
  addToCartProducts: addToCartReducers,
});

const cartItemsProductFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  addToCartProducts: {
    cartItems: cartItemsProductFromLocalStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
