import { createSlice } from "@reduxjs/toolkit";

interface IGuess {
  guessedWord: string
  letterMatchCount: number
}
interface IState {
  secretWord: string
  success: boolean
  guessedWords: IGuess[]
}

const initialState:IState = {
  secretWord: 'party',
  success: false,
  guessedWords: []
}


export const guessSlice = createSlice({
  name: 'guess',
  initialState,
  reducers: {

  }
})

export default guessSlice.reducer