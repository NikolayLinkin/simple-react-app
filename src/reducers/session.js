import * as types from "../constatns/ActionTypes";

const initialState = {
    token: null,
    appLoaded: true,
};

const session = (state=initialState, action) => {
  switch (action.type) {

      case types.APP_LOAD: {
          return {
              ...state,
              appLoaded: true,
          }
      }

      case types.LOGIN_SUCCESS: {
          return {
              ...state,
              authToken: action.authToken,
          }
      }

      case types.LOGOUT: {
          return {...state,}
      }

      default: return state;
  }
};

export default session;