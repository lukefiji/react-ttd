import bitcoinReducer from './bitcoinReducer';
import { FETCH_BITCOIN } from '../actions/actionTypes';

describe('bitcoinReducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  describe('when initializing', () => {
    it('should return initial state', () => {
      expect(bitcoinReducer(undefined, {})).toEqual({});
    });

    it('should fetch and set bitcoin data', () => {
      expect(
        bitcoinReducer({}, { type: FETCH_BITCOIN, bitcoin: bitcoinData })
      ).toEqual(bitcoinData);
    });
  });
});
