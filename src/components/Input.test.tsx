import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import Input from './Input'

// const mockSetCurrentGuess = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState: string) => [initialState, mockSetCurrentGuess]
// }))

const setup = (success=false, secretWord='party') => {
  return shallow(<Input success={success} secretWord={secretWord}/>)
}

describe('render', () => {
  describe('success is true', () => {
    let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>>

    beforeEach(() => {
      wrapper = setup(true)

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
    let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>>

    beforeEach(() => {
      wrapper = setup(false)

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
  let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>>
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


    const wrapper = setup()
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