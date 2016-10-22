import * as actionType from '../constants/actionType';
import { newsstockList } from '../api/newsstockApi';

function fetchNewsstockList(pageNumber) {
  return {
    type: actionType.FETCH_NEWSSTOCK_LIST,
    payload: newsstockList(pageNumber)
  };
}

function fetchNewsstockSuccess(data) {
  return {
    type: actionType.FETCH_NEWSSTOCK_LIST_SUCCESS,
    payload: data
  };
}

function fetchNewsstockError(data) {
  return {
    type: actionType.FETCH_NEWSSTOCK_LIST_ERROR,
    payload: data
  };
}

function increasePageNumber(pageNumber) {
  return {
    type: actionType.INCREASE_PAGE_NUMBER,
    payload: pageNumber
  }
}

export {
  fetchNewsstockList,
  fetchNewsstockSuccess,
  fetchNewsstockError,
  increasePageNumber
}
