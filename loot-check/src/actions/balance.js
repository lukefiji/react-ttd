import { SET_BALANCE, DEPOSIT_MONEY, WITHDRAW_MONEY } from './actionTypes';

export const setBalance = balance => {
  return {
    type: SET_BALANCE,
    balance
  };
};

export const deposit = deposit => {
  return {
    type: DEPOSIT_MONEY,
    deposit
  };
};

export const withdraw = withdraw => {
  return {
    type: WITHDRAW_MONEY,
    withdraw
  };
};
