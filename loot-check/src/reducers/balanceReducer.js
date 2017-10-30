import {
  SET_BALANCE,
  DEPOSIT_MONEY,
  WITHDRAW_MONEY
} from '../actions/actionTypes';
import { read_cookie, bake_cookie } from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const balanceReducer = (state = 0, action) => {
  let balance;

  switch (action.type) {
    case SET_BALANCE:
      balance = action.balance;
      break;
    case DEPOSIT_MONEY:
      balance = state + action.deposit;
      break;
    case WITHDRAW_MONEY:
      balance = state - action.withdraw;
      break;
    default:
      return parseInt(read_cookie(BALANCE_COOKIE), 10) || state;
  }

  bake_cookie(BALANCE_COOKIE, balance);

  return balance;
};

export default balanceReducer;
