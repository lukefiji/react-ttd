import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  render() {
    return <h3>Bitcoin balance</h3>;
  }
}

function mapStateToProps(state) {
  return {
    state: state.bitcoin
  };
}

export default connect(mapStateToProps, { fetchBitcoin })(Loot);
