export const API_ROOT = "https://conduit.productionready.io/api";

export const GET_CURRENT_USER = `${API_ROOT}/user`;

export const GET_USERS = page => `${API_ROOT}/users?page=${page}`;
export const USERS = `${API_ROOT}/users`;
export const LOGIN = `${API_ROOT}/users/login`;
export const GET_ARTICLES = (tabName, page) => `${API_ROOT}/articles/${tabName}?limit=10&offset=${page * 10}`;
