import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Shallow render App
const app = shallow(<App />);

it('should render correctly', () => {
  expect(app).toMatchSnapshot();
});
