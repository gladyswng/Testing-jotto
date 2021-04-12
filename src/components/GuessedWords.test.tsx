import React from 'react'
import { shallow } from 'enzyme'
import * as Enzyme from 'enzyme'
import GuessedWords from './GuessedWords'
import { findByTestAttr } from '../test/testUtils'

const defaultProps = { guessedWords: [
  {guessedword: 'train', letterMatchCount: 3},
]}

const setup = (props:any={}) => {
  const setupProps = {...defaultProps, ...props}
  
  return shallow(<GuessedWords {...setupProps}/>)
}


describe('if there are no words guessed', () => {
  let wrapper:Enzyme.ShallowWrapper<React.Component<{}, {}, any>>

  beforeEach(() => {
    
    wrapper = setup({ guessedWords:[] })
  })

  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)
  })
  test('renders instruction to guess a word', () => {
    const instructions = findByTestAttr(wrapper, 'guess-instructions')
     expect(instructions.length).toBe(1)
    // expect(instructions.text().length).not.toBe(0)
  })  
})

describe('if there are words guessed', () => {
  let wrapper: Enzyme.ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
  const guessedWords = [
    {guessedwword: 'train', letterMatchCount: 3},
    {guessedwword: 'agile', letterMatchCount: 1},
    {guessedwword: 'party', letterMatchCount: 5},
  ]

  beforeEach(() => {
    wrapper = setup({ guessedWords })
  })
  test('renders without error', () => {
    const component = findByTestAttr(wrapper, 'component-guessed-words')
    expect(component.length).toBe(1)  
  })

  test('renders guessed words section', () => {
    const guessedWordNode = findByTestAttr(wrapper, 'guessed-words')
    expect(guessedWordNode.length).toBe(1)
  })

  test('correct number of guessed words', () => {
    const guessWordNodes = findByTestAttr(wrapper, 'guessed-word')
    expect(guessWordNodes.length).toBe(guessedWords.length)
  })
})
