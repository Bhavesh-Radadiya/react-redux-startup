import * as api from '../constants/configUrl';
import fetch from 'isomorphic-fetch';

const getCount = () => {
  return fetch(api.userCount,{method:'get'})
  .then((res) => res.json(),(err) => {
    console.log(err);
  });
};

export default getCount;
