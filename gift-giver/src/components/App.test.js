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
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    // Test pollution - make isolated instance because
    // a gift is added from the above test case
    it('should add a new gift to rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
