import * as types from './types'
import {api} from "../../../constants";

export const getArticlesRequest = () => ({
  type: types.GET_ARTICLES_REQUEST,
});
export const getArticlesSuccess = (data) => ({
  type: types.GET_ARTICLES_SUCCESS,
  payload: data,
});
export const getArticlesFailure = (err) => ({
  type: types.GET_ARTICLES_FAILURE,
  payload: err,
});

export const getAllArticles = () => async (dispatch) => {
  dispatch(getArticlesRequest());
  try {
    const res = await fetch(api);
    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }
    const result = await res.json();
    dispatch(getArticlesSuccess(result));
  } catch (err) {
    console.log(err)
    dispatch(getArticlesFailure(err.message));
  }
};