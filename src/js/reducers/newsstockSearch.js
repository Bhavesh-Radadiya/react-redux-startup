import * as actionType from '../constants/actionType';

const initialState = {newsstock:{isLoading:false,newsstockList:[],limit:20,pageNumber:1}};

export default function(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case actionType.FETCH_NEWSSTOCK_LIST:
      return {...state,newsstock:{isLoading:true,newsstockList:[...state.newsstock.newsstockList],limit:20,pageNumber:state.newsstock.pageNumber}};
    case actionType.FETCH_NEWSSTOCK_LIST_SUCCESS:
      return {...state,newsstock:{isLoading:false,newsstockList:[...state.newsstock.newsstockList,...action.payload],limit:20,pageNumber:state.newsstock.pageNumber}};
    case actionType.FETCH_DATA_ERROR:
      return {...state,newsstock:{isLoading:false,err:action.payload,limit:20,pageNumber:1}};
    case actionType.INCREASE_PAGE_NUMBER:
      return {...state,newsstock:{isLoading:false,newsstockList:[...state.newsstock.newsstockList],pageNumber:action.payload,limit:20}}
  }

  return state;
}
