import { actionTypes } from "../actions";
import successReducer from "./successReducer";

test('when previous state is undefined, return false', () => {
  // set previous state is undefined, and we dont care what the action is
  const newState = successReducer(undefined, { type:null })
  expect(newState).toBe(false)
})

test('return previous state when unknown action type', () => {
  const newState = successReducer(false, {type: 'unknown'})
  expect(newState).toBe(false)
})

test('return `true` for action type CORRECT_GUESS', () => {
  const newState = successReducer(false, { type: actionTypes.CORRECT_GUESS})
  expect(newState).toBe(true)
})

