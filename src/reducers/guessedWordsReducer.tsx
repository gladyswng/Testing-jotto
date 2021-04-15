import { actionTypes, guessWord } from "../actions"
import { AnyAction } from 'redux'

// we dont have to create test file for it since were going to have the intergration test file
interface IGuess {
  guessedWord: string
  letterMatchCount: number
}


export default (state:IGuess[]=[], action:AnyAction) => {
  switch(action.type) {
    case actionTypes.GUESS_WORD: 

      return [...state, action.payload]
    default: 
      return state
  }
}