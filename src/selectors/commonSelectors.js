export const getUsersList = state => state.users.data;
export const usersFetching = state => state.users.isFetching;

//session
export const getSessionToken = state => state.session.token;