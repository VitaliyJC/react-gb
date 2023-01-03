import * as types from './types'

const initialState = {
  gists: [],
  request: types.STATUSES.IDLE,
  error: null,
};
export const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES_REQUEST:
      return {
        ...state,
        request: types.STATUSES.REQUEST,
      };
    case types.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload,
        request: types.STATUSES.SUCCESS,
      };
    case types.GET_ARTICLES_FAILURE:
      return {
        ...state,
        request: types.STATUSES.FAILURE,
        error: action.payload,
      };
    default:
      return state;
  }
};