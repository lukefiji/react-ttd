import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Set up a shallow render of App
const app = shallow(<App />);

describe('App', () => {
  it('should render correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('should initlalize `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button ', () => {
    const giftId = 1;

    // Run before each test unit in this describe block
    beforeEach(() => {
      // find() targets a child node by JSX tag or CSS class name
      app.find('.btn-add').simulate('click');
    });

    // Run after each test in this describe block
    afterEach(() => {
      // Set state to empty array
      app.setState({ gifts: [] });
    });

    it('should add a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id: giftId }]);
    });

    // Test pollution - make isolated instance because
    // a gift is added from the above test case
    it('should add a new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('should create a Gift component', () => {
      // Find via JSX
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('when the user wants to remove the added gift', () => {
      beforeEach(() => {
        // Access instance of component to run class methods
        app.instance().removeGift(giftId);
      });

      it('should remove gift from `state`', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
