import * as api from '../constants/configUrl';
import fetch from 'isomorphic-fetch';

function newsstockList(pageNumber) {
  console.log(pageNumber);
  return fetch(api.newsstockList + '?pageNumber=' + pageNumber +'&pageSize=20',{
    method: 'GET',
  }).then(res => res.json(),err=>err);
}

export {
  newsstockList
}
