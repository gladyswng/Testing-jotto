import { combineReducers } from "redux";
import success from "./successReducer";


export const rootReducer = combineReducers({
  success
})

export type RootState = ReturnType<typeof rootReducer>