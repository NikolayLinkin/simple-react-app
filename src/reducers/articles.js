import * as types from "../constatns/ActionTypes";

const initialState = {

};

const articles = (state=initialState, action) => {
  switch(action.type) {
      case types.FETCH_ARTICLES_REQ: {
          return {
              ...state,
          };
      }

      case types.FETCH_ARTICLES_ERROR: {
          return {
              ...state,
          };
      }

      case types.FETCH_ARTICLES_SUCCESS: {
          return {
              ...state,
          };
      }

      default: return state;
  }
};

export default articles;