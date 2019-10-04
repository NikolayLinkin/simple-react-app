export const getUsersList = state => state.users.data;
export const usersFetching = state => state.users.isFetching;

export const getCurrentUser = state => state.session.currentUser;
export const loggedIn = state => state.session.loggedIn;
export const getAuthToken = state => state.session.token;
//session
export const getSessionToken = state => state.session.token;

export const appLoad = state => state.session.appLoad;