import { FETCH_BITCOIN } from './actionTypes';

export const fetchBitcoin = () => {
  return async dispatch => {
    const res = await fetch(
      'https://api.coindesk.com/v1/bpi/currentprice.json'
    );
    const json = await res.json();

    return dispatch({
      type: FETCH_BITCOIN,
      bitcoin: json
    });
  };
};
