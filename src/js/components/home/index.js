import React from 'react';
import {connect} from 'react-redux';
import Home from './home';

const mapStateProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {
  return {
      getCount: () => {
        let req = dispatch(getCount());
        req.payload.then((res) => {
          console.log(res);
        })
      }
  };
};

export default connect(mapDispatchToProps)(Home);
