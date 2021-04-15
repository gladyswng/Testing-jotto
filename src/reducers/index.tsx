import { combineReducers } from "redux";
import guessedWords from "./guessedWordsReducer";
import success from "./successReducer";
import secretWord from "./secretWordReducer"

export const rootReducer = combineReducers({
  success,
  guessedWords,
  secretWord
  
})

export type RootState = ReturnType<typeof rootReducer>