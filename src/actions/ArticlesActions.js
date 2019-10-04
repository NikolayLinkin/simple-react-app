import * as types from "../constatns/ActionTypes";
import {callApi} from "../utils/ApiUtils";
import {GET_ARTICLES} from "../constatns/ApiConstants";
import {getAuthToken} from "../selectors/commonSelectors";

export const fetchArticles = (tabName = '', page = 0) => async (dispatch, getState) => {
    const state = getState();
    const token = getAuthToken(state);

    const options = {
        method: 'GET',
        headers: {
            authorization: token ? `Token ${token}` : '',
        }
    };
    const {json} = await callApi(GET_ARTICLES(tabName, page), options);

    console.dir(json);
};
