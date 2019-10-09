import * as types from "../constatns/ActionTypes";

const initialState = {
    items: [],
    count: null,
    feel: [],
    isFetching: false,
};

const articles = (state=initialState, action) => {
  switch(action.type) {
      case types.FETCH_ARTICLES_REQ: {
          return {
              ...state,
              isFetching: true,
          };
      }

      case types.FETCH_ARTICLES_ERROR: {
          return {
              ...state,
              isFetching: false,
          };
      }

      case types.FETCH_ARTICLES_SUCCESS: {
          return {
              ...state,
              isFetching: false,
              items: [...new Set([...state.items, ...action.items])],
              count: action.count,
          };
      }

      default: return state;
  }
};

export default articles;