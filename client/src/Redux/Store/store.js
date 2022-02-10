import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  addToCartReducers,
  allProductReducers,
  arrivalProductReducers,
  featuredProductReducers,
  hotProductReducers,
  singleProductReducers,
} from "../Reducers/productReducers";
import {
  userDetailsReducers,
  userLoginReducers,
  userSignUpReducer,
  userUpdateReducers,
} from "../Reducers/userReducers";

const rootReducers = combineReducers({
  featuredProducts: featuredProductReducers,
  arrivalProducts: arrivalProductReducers,
  hotProducts: hotProductReducers,
  singleProduct: singleProductReducers,
  addToCartProducts: addToCartReducers,
  allProduct: allProductReducers,
  userSignup: userSignUpReducer,
  userLogin: userLoginReducers,
  userDetails: userDetailsReducers,
  userUpdate: userUpdateReducers,
});

const cartItemsProductFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoInLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingInfoLocalStorage = localStorage.getItem("shippingInfo")
  ? JSON.parse(localStorage.getItem("shippingInfo"))
  : {};

const initialState = {
  addToCartProducts: {
    cartItems: cartItemsProductFromLocalStorage,
    shippingInfo: shippingInfoLocalStorage,
  },
  userLogin: { userInfo: userInfoInLocalStorage },
};
const middleware = [thunk];

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
