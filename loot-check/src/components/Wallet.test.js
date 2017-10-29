import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();

  // Mock props
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it('should render properly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('should display balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet Balance: 20');
  });

  it('should create an input to deposit into or withdraw from balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });

  describe('when the user types into wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet
        .find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    it('should update local wallet balance in store and convert to number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe('when the user wants to make a deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('should dispatch the `deposit()` it receives from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('when the user wants to make a withdrawl', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('should dispatch the `withdraw()` it receives from props with local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
