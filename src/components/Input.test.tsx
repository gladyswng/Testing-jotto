import React from 'react'
import { mount } from 'enzyme'
import { ReactWrapper } from 'enzyme'

import { findByTestAttr, storeFactory } from '../test/testUtils'
import Input from './Input'
import { Provider } from 'react-redux'

// const mockSetCurrentGuess = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState: string) => [initialState, mockSetCurrentGuess]
// }))

const setup = (initialState={success: false}, secretWord='party') => {
  // if we use shallow here then it would just give us the provider with a placeholder for the input child, but we're only interested in whats inside the component child - therefore mount
  // here we create a store factory that is explicitly for our test
  const store = storeFactory(initialState)
  return mount(<Provider store={store}><Input secretWord={secretWord}/></Provider>)
}

describe('render', () => {
  describe('success is true', () => {
    let wrapper: ReactWrapper

    beforeEach(() => {
      wrapper = setup({ success: true })

    })
    test('renders without error', () => {
      const wrapper = setup()
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1)
    })

    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(false)
    })

    test('submit button does not show', ()=> {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(false)
    })

  })

  describe('success is false', () => {
    let wrapper: ReactWrapper

    beforeEach(() => {
      wrapper = setup({success:false})

    })
    test('renders without error', () => {
      const wrapper = setup()
      const inputComponent = findByTestAttr(wrapper, 'component-input')
      expect(inputComponent.length).toBe(1)
    })

    test('input box shows', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box')
      expect(inputBox.exists()).toBe(true)
    })

    test('submit shows', ()=> {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      expect(submitButton.exists()).toBe(true)
    })
  })
})







describe('state controlled input field', () => {

  let mockSetCurrentGuess = jest.fn()
  let wrapper: ReactWrapper
  let originalUseState: any
  beforeEach(() => {
    mockSetCurrentGuess.mockClear()
    originalUseState = React.useState
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    wrapper = setup()
  })

  afterEach(() => {
    React.useState = originalUseState
  })


  test('state updates with value of input box upon change', () => {

    // remember that if success true theres no interaction with input
    const wrapper = setup({success: false})
    const inputBox = findByTestAttr(wrapper, 'input-box') 
    const mockEvent = { target: {value: 'train'} }
    // simulating inputbox getting a value as train
    inputBox.simulate("change", mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })

  test('currentGuess cleared after submit button clicked', () => {
    
    // const mockSetCurrentGuess = jest.fn
    const submitButton= findByTestAttr(wrapper, 'submit-button') 
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess])
    submitButton.simulate("click", { preventDefault() {} })
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    

  })
})