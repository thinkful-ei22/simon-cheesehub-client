import React from 'react';
import {connect} from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

class CheeseList extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeseItems = this.props.cheeses.map((cheese, index) => (<li key={index}>{cheese}</li>));

    return (
      <ul>
        {cheeseItems}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  cheeses: state.cheeses
});

export default connect(mapStateToProps)(CheeseList);
