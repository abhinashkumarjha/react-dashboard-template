import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "./Controls";

import { connect } from "react-redux";

@connect((store) => {
  return {
    count: store
  };
})

 class Counter extends Component {
  render() {

    const { count } = this.props.count;

    return (
      <div className="counter">
        <div>{count}</div>
        <Controls />
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
