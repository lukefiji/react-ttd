import React from 'react';
import { shallow, mount } from 'enzyme';

import { Loot } from './Loot';

describe('Loot', () => {
  // Tracks if it was called throughout function
  const mockFetchBitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} };
  const loot = shallow(<Loot {...props} />);

  it('should render properly', () => {
    expect(loot).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />);
    });
  });
});
