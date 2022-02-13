import {
  NEW_ORDER_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_RESET,
  ORDER_UPDATE_FAIL,
  ORDER_UPDATE_REQUEST,
  ORDER_UPDATE_SUCCESS,
  USER_ORDER_FAIL,
  USER_ORDER_REQUEST,
  USER_ORDER_SUCCESS,
} from "../Constants/constants";

export const createNewOrder = (state = {}, action) => {
  switch (action.type) {
    case NEW_ORDER_REQUEST:
      return { loading: true };
    case NEW_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case NEW_ORDER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const OrderDetailsReducer = (
  state = { loading: true, order: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const OrderUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_UPDATE_REQUEST:
      return { loading: true };
    case ORDER_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case ORDER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_RESET:
      return {};
    default:
      return state;
  }
};

export const userOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_ORDER_REQUEST:
      return { loading: true };
    case USER_ORDER_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case USER_ORDER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
