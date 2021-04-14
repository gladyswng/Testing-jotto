import moxios from 'moxios'
import { actionTypes, correctGuess, getSecretWord } from '.'

describe('correctGuess', () => {
  test('returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess()
    // Deep equal
    expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS })

  })
})

describe('getSecretWord', () => {
  // tell axios to send request to moxios for every request instead of to the internet 
  beforeEach(() => {
    moxios.install()
  })
  // return moxios to its original state
  afterEach(() => {
    moxios.uninstall()
  })
  test('secretWord is returned', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: 'party'
      })
    })

    // update to test app in Redux / context 
    // call assertion in .then to know it runs before assertion runs before having axios in the functions - important to see fails first
    // return - wont return until this ressolves
    return getSecretWord()
      .then((secretWord:string) => {
        expect(secretWord).toBe('party')
      })
  })


})
