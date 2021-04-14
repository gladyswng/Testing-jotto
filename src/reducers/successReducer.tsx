import { AnyAction } from 'redux'
import { actionTypes } from '../actions'
export default (state:boolean|undefined = false, action:AnyAction) => {

  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return true
    default: 
      return state
  }

}