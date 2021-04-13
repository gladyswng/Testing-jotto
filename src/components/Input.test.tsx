import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'

import { findByTestAttr } from '../test/testUtils'
import Input from './Input'


const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord}/>)
}

test('renders without error', () => {
  const wrapper = setup()
  const inputComponent = findByTestAttr(wrapper, 'component-input')
  expect(inputComponent.length).toBe(1)
})

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn()
    // first string empty, second mock in useState
    // replaced by these
    React.useState = jest.fn(() => ["", mockSetCurrentGuess])

    const wrapper = setup()
    const inputBox = findByTestAttr(wrapper, 'input-box') 
    const mockEvent = { target: {value: 'train'} }
    // simulating inputbox getting a value as train
    inputBox.simulate("change", mockEvent)
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })
})