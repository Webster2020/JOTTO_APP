import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from './utils/testUtils';
import { App } from './App';

import { getSecretWord as mockGetSecretWord } from './actions';
// activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');

const setup = () => {
  // use mount because useEffect not called on 'shallow'
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
};

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test('get secret word on app mount', () => {
    const wrapper = setup();
    console.log(wrapper);
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });
  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();

    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);

  });
});
