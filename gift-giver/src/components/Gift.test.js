import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  // Mock id and props
  const id = 1;
  const props = { id, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it('should render properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('should initialize person and present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'John';

    beforeEach(() => {
      gift
        .find('.input-person')
        .simulate('change', { target: { value: person } });
    });

    it('should update person in `state`', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Leather Wallet';

    beforeEach(() => {
      gift
        .find('.input-present')
        .simulate('change', { target: { value: present } });
    });

    it('should update present in `state`', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking the `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('should call the `removeGift` callback', () => {
      // Mock functions gives ability to check if functions are
      // called, and with certain arguments if specified
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});