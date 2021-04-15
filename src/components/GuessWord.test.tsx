import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import App from '../App'
import { findByTestAttr, storeFactory } from '../test/testUtils'
import { Provider } from 'react-redux'


// activate global mock to make sure getSecretWord doesn't make network call
// any where here you see the action module being imported, i want to import from mocks module instead

jest.mock('../actions')

// not isolated, mount on entire app component

// Ceate wrapper with specified initial conditions, then submit a guessed word of 'train'

// wrapper - not a shallow wrapper but a wrapper we get from mount which includes all of the contents of the children as well

const setup = (initialState={}) => {
  const store = storeFactory(initialState)

  // TODO - apply state
  const wrapper = mount(<Provider store={store}><App /></Provider>)

  // add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box')
  inputBox.simulate('change', { target: { value: 'train' } })

  // simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper
} 

// describe('invalid word guessed', () => {
//   test.todo('guessedWords table does not get another row')
// })



// seperate describes when each one is going to have initial state

describe('no words guessed', () => {
  let wrapper: ReactWrapper

  
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
    })
  })

  test('creates GuessedWords table with one row', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordRows).toHaveLength(1)
  })

})

describe('some words guessed', () => {
  let wrapper: ReactWrapper
  
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    })
  })
  test('creates GuessedWords table with two rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordRows).toHaveLength(2)
  })

  
  // const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
  //   expect(guessedWordRows).toHaveLength(1)
})

describe('guessed secret word', () => {
  let wrapper: ReactWrapper
  
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    })
    // add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box')
    const mockEvent = { target: { value: 'party' } }
    inputBox.simulate('change', mockEvent)
    // simulate click submit button
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    submitButton.simulate('click', {preventDefault() {}})

  })


  test('creates GuessedWords table with two rows', () => {
    const guessedWordRows = findByTestAttr(wrapper, 'guessed-word')
    expect(guessedWordRows).toHaveLength(3)
  })

  test('congrats-component shows', () => {
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text().length).toBeGreaterThan(0)
  })

  test('input-component does not show', ()=> {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.exists()).toBe(false)

    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.exists()).toBe(false)
  })


})

