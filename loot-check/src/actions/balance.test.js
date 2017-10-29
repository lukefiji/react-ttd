import * as actions from './balance';
import { SET_BALANCE, DEPOSIT_MONEY, WITHDRAW_MONEY } from './actionTypes';

it('should create an action to set balance', () => {
  const balance = 0;

  const expectedAction = { type: SET_BALANCE, balance };

  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('should create an action to deposit into balance', () => {
  const deposit = 10;

  const expectedAction = { type: DEPOSIT_MONEY, deposit };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('should create an action to withdraw from balance', () => {
  const withdraw = 10;

  const expectedAction = { type: WITHDRAW_MONEY, withdraw };

  expect(actions.withdraw(withdraw)).toEqual(expectedAction);
});
