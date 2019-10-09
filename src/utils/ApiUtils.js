import camelize from "camelize";

let token = null;
export const setToken = _token => {
    token = `Token ${_token}`
};

const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

export const apiRequest = {
    get: (url, body) => {
        const options = {
            method: 'GET',
            headers: {
                ...defaultHeaders,
                authorization: token ? token : '',
            },
            body: JSON.stringify(body)
        };

        return callApi(url, options);
    },
    del: (url) => {
        const options = {
            method: 'DELETE',
            headers: {
                ...defaultHeaders,
                authorization: token ? token : '',
            }
        };

        return callApi(url, options);
    },
    post: (url, body) => {
        const options = {
            method: 'POST',
            headers: {
                ...defaultHeaders,
                authorization: token ? token : '',
            },
            body: JSON.stringify(body)
        };

        return callApi(url, options);
    },
    put: (url) => {
        const options = {
            method: 'PUT',
            headers: {
                ...defaultHeaders,
                authorization: token ? token : '',
            }
        };

        return callApi(url, options);
    },
};

const callApi = (url, options) => {

    return fetch(url, options)
        .then(
            res => (res.ok ? res.json() : res.json()),
            error => Promise.reject(error)
        )
        .then(
            json => ({json: camelize(json)}),
            error => ({error})
        )
        .catch(error => ({error}))
};