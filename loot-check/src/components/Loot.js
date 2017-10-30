import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from '../actions/bitcoin';

export class Loot extends Component {
  componentDidMount() {
    this.props.fetchBitcoin();
  }

  computeBitcoin = () => {
    const { bitcoin } = this.props;

    // Guard clause - if there are no keys
    if (!Object.keys(bitcoin).length) return '';

    const btcNum = parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    return this.props.balance / btcNum;
  };

  render() {
    return <h3>Bitcoin balance: {this.computeBitcoin()}</h3>;
  }
}

function mapStateToProps(state) {
  return {
    bitcoin: state.bitcoin,
    balance: state.balance
  };
}

export default connect(mapStateToProps, { fetchBitcoin })(Loot);
