import camelize from "camelize";

export const callApi = (url, options) =>
    fetch(url, options)
        .then(
            res => (res.ok ?  res.json() : res.json()),
            error => Promise.reject(error)
        )
        .then(
            json => ({json: camelize(json)}),
            error => ({error})
        )
        .catch(error => ({error}));