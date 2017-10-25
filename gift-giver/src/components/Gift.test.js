import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
  const gift = shallow(<Gift />);

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
});
