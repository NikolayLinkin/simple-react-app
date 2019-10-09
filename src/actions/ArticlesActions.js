import * as types from "../constatns/ActionTypes";
import {apiRequest} from "../utils/ApiUtils";
import {GET_ARTICLES} from "../constatns/ApiConstants";

const fetchArticlesSuccess = (items, count) => ({
    type: types.FETCH_ARTICLES_SUCCESS,
    items,
    count,
});

export const fetchArticles = (tabName = '', page = 0) => async (dispatch, getState) => {
    dispatch({type: types.FETCH_ARTICLES_REQ});

    const {json} = await apiRequest.get(GET_ARTICLES(tabName, page));

    const {articles, articlesCount} = json;

    dispatch(fetchArticlesSuccess(articles, articlesCount));
};
