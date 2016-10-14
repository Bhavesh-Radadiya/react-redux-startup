import * as actionType from '../constants/actionType';

export default function(state={},action) {
  switch (action.type) {
    case actionType.FETCH_DATA:
      return {...state,count:{loading:true,err:null}};
    case actionType.FETCH_DATA_SUCCESS:
      return {...state,count:{loading:true,err:null}};
    case actionType.FETCH_DATA_SUCCESS:
        return {...state,count:{loading:true,err:null}};
  }
  return state;
};
