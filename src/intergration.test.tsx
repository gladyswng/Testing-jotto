import { guessWord } from "./actions"
import { RootState } from "./reducers"
import { storeFactory } from "./test/testUtils"


const secretWord = 'party'
const unsuccessfulGuess = 'train'

describe('guessWord action dispatcher', () => {
  // think about the posibilities that we have - wether theres guessed words and if correct 
  describe('no guessed words', () => {
    let store:any
    const initialState = { secretWord, success: false, guessedWords: [] }
    beforeEach(() => {
      // we have no guessed words here so we want our initial state to have empty value which is the default value so we can just leave it there 
      store = storeFactory(initialState)
    })

    test('updates state correctly for unsuccesful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess))
      const newState = store.getState()
      const expectedState =  { 
        ...initialState,
        guessedWords: [{
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
        }]
       }
       
       // obj - equal not tobe
      expect(newState).toEqual(expectedState)
      
    })
    test('updates state correctly for succesful guess', () => {
      store.dispatch(guessWord(secretWord))
      const newState = store.getState()
      const expectedState = {
        secretWord,
        guessedWords: [{
          guessedWord: secretWord,
          letterMatchCount: 5
        }],
        success: true
      }

      expect(newState).toEqual(expectedState)
    })
    
  })
  
})

describe('some guessed words', () => {

  const guessedWords = [ { guessedWord: 'agile', letterMatchCount:1 } ]
  const initialState = {guessedWords, secretWord, success: false }

  let store: any 
  beforeEach(() => {
    store = storeFactory(initialState)
  })
  test('updates state correctly for unsuccesful guess', () => {
    store.dispatch(guessWord(unsuccessfulGuess))
    const newState = store.getState()
    const expectedState = {
      secretWord,
      success: false,
      guessedWords: [
        ...guessedWords,
        { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
      ]
    }
    expect(newState).toEqual(expectedState)

  })
  test('updates state correctly for succesful guess', () => {
    store.dispatch(guessWord(secretWord))
    const newState = store.getState()
    const expectedState = {
      secretWord,
      success: true,
      guessedWords: [
        ...guessedWords,
        { guessedWord: secretWord, 
          letterMatchCount: 5 }
      ]
    }
    expect(newState).toEqual(expectedState)
    
  })
  
})

