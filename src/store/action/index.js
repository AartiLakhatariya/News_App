import axios from "axios";
import { endpointSearch } from "../../config/api";
import { SEARCH_FAILURE, SEARCH_REQUEST, SEARCH_SUCCESS } from "./actionTypes";

const fetchDataRequest = () => ({
  type: SEARCH_REQUEST,
});

const fetchDataSuccess = (result, query) => ({
  type: SEARCH_SUCCESS,
  payload: {
    articles: result,
    query: query,
  },
});

const fetchDataFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: error,
});

export const searchArticle = (query) => async (dispatch) => {
  try {
    dispatch(fetchDataRequest());
    const response = await axios.get(endpointSearch(query));
    const result = response.data;
    dispatch(fetchDataSuccess(result, query));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
