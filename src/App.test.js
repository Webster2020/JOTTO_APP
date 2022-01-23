import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './utils/testUtils';
import { App } from './App';

const setup = () => {
  return shallow(<App />);
};

it('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});
