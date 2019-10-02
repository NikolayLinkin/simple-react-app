const API_ROOT = "https://reqres.in/api";

export const GET_USERS = page => `${API_ROOT}/users?page=${page}`;
