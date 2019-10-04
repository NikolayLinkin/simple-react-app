import * as types from "../constatns/ActionTypes";

const initialState = {
    token: null,
    appLoad: false,
    currentUser: null,
    loggedIn: false,
};

const session = (state=initialState, action) => {
  switch (action.type) {

      case types.APP_LOAD: {
          return {
              ...state,
              appLoad: true,
          }
      }

      case types.LOGIN_SUCCESS: {
          return {
              ...state,
              token: action.authToken,
              loggedIn: true,
          }
      }

      case types.FETCH_LOGIN_SUCCESS:
      case types.FETCH_REGISTER_SUCCESS: {
          return {
              ...state,
              authToken: action.authToken,
              currentUser: action.user,
          }
      }

      case types.LOGOUT: {
          return {...initialState}
      }

      case types.FETCH_SESSION_DATA_SUCCESS: {
          return {
            ...state,
            currentUser: action.user,
          };
      }

      default: return state;
  }
};

export default session;