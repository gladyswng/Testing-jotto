import { configureStore } from '@reduxjs/toolkit'
import guessReducer from '../components/gusseSlice'

const store =  configureStore({
  reducer: {
    guess: guessReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
