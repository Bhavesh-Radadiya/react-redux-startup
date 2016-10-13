import React, {Component} from 'react';
import Nav from '../nav';
import {connect} from 'react-redux';
import {fetchData} from '../../actions/count';

const mapStateProps = (state) => {
	const list = state;
	return{
		list
	};
};

const mapDispatchToProps = (dispatch) => {
  return {
      getCount: () => {
        let req = dispatch(fetchData());
        req.payload.then((res) => {
          console.log(res);
        })
      }
  };
};

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getCount();
  }

  render() {
    return (
      <div>
        <Nav />
        This is Home page.
      </div>
    );
  }
}

export default connect(mapStateProps,mapDispatchToProps)(Home);
