import axios from "axios"
import GuessedWords from "../components/GuessedWords"
import { getLetterMatchCount } from "../helpers"
import { Dispatch,  } from "redux"
import { RootState } from "../reducers"

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
}

export const guessWord = (guessedWord: string) => (dispatch:Dispatch, getState: ()=> RootState) => {
  console.log(guessedWord)
  const secretWord = getState().secretWord
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord)
  console.log(secretWord)
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  })

  if (guessedWord === secretWord) {
    dispatch({
      type: actionTypes.CORRECT_GUESS
    })
  }
}

export const getSecretWord = () => {
  // TODO - Write actual action in Redux / context
  // return response from server
  return axios.get('http://localhost:3030')
    .then(response => response.data)
}
  