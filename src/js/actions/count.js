import * as actionType from '../constants/actionType';
import getCount from '../api/getCount';

function fetchData() {
  return {
    type: actionType.FETCH_DATA,
    payload: getCount()
  }
}

export {
  fetchData
}
