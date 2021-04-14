import React from 'react'
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttr, storeFactory } from "./test/testUtils";

// activate global mock to make sure getSecretWord doesn't make network call
// any where here you see the action module being imported, i want to import from mocks module instead

jest.mock('./actions')
// spy on getSecretWord in our test
// this one is going to be the function inside __mocks__
import { getSecretWord as mockGetSecretWord } from './actions'
import { Provider } from 'react-redux';

const setup = () => {
  const store = storeFactory() // no arguments because the default store will work just fine
  return mount(<Provider store={store}><App /></Provider>)
}

test('renders without error', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent).toHaveLength(1)
})

describe('get secret word', () => {

  // make a beforeEach to reset the mock secret word, so that any time it might have been called, it gets reset before every test so we don't need to worry about any calls that may have run in previous test
  beforeEach(() => {
    (mockGetSecretWord as jest.Mock).mockClear() 
  })


  test('get secret word on app mount', () => {
    // here we need to make sure here we're running on mount and not shallow because of some issues
    //https://github.com/airbnb/enzyme/issues/2086
    const wrapper = setup()
    // we mounted the app - expect 1 time
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })

  test('getSecretWord does not run on app update', () => {
    const wrapper = setup();

    // we want to take the mockSecretWord and clear any mocks that have been called, we expect 1 mock to be called here, and now we want to reset the number of times its been called so that we can expect 0 times after update
    (mockGetSecretWord as jest.Mock).mockClear()
    // to update the component - use setProps
    wrapper.setProps('')
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)

  })
  
  
})
