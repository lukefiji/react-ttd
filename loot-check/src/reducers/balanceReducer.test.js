import balanceReducer from './balanceReducer';
import balanceReducer2 from './balanceReducer';
import {
  SET_BALANCE,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY
} from '../actions/actionTypes';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    it('should return the initial state', () => {
      expect(balanceReducer(undefined, {})).toEqual(0);
    });

    const newBalance = 10;
    it('should handle SET_BALANCE', () => {
      expect(
        balanceReducer(undefined, {
          type: SET_BALANCE,
          balance: newBalance
        })
      ).toEqual(newBalance);
    });

    describe('then re-initializing', () => {
      it('should read balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(newBalance);
      });
    });
  });

  it('should handle DEPOSIT_MONEY', () => {
    const deposit = 10;
    const initialState = 5;

    expect(
      balanceReducer(initialState, {
        type: DEPOSIT_MONEY,
        deposit
      })
    ).toEqual(initialState + deposit);
  });

  it('should handle WITHDRAW_MONEY', () => {
    const withdraw = 10;
    const initialState = 25;

    expect(
      balanceReducer(initialState, {
        type: WITHDRAW_MONEY,
        withdraw
      })
    ).toEqual(initialState - withdraw);
  });
});
