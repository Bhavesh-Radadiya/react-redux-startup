import React from 'react';
import {connect} from 'react-redux';
import Home from './home';
import { fetchNewsstockList, fetchNewsstockSuccess, fetchNewsstockError, increasePageNumber } from '../../actions';

const mapStateProps = (state) => {
  console.log(state);
  const newsstockList = state.newsstockSearch.newsstock;
  return {
    newsstockList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getNewsstockList: (pageNumber) => {
        let req = dispatch(fetchNewsstockList(pageNumber));
        req.payload.then(res => {
          if ( res.isError ) {
            dispatch(fetchNewsstockError(res.message));
          } else {
            dispatch(increasePageNumber(parseInt(pageNumber) + 1));
            dispatch(fetchNewsstockSuccess(res.newsstockList));    
          }
        },err => {
          dispatch(fetchNewsstockError(err));
        });
      }
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Home);
