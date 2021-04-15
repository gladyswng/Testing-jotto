import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { guessWord } from '../actions'
import { RootState } from '../reducers'

interface InputProps {
  secretWord?: string
  success?: boolean
}

const Input: React.FC<InputProps> = ({ secretWord }) => {
  const dispatch = useDispatch()
  const [ currentGuess, setCurrentGuess ] = React.useState<string>('')
  const success = useSelector((state:RootState) => state.success)
  const submitHandler = (e:React.SyntheticEvent) => {
    e.preventDefault()

    // TODO - update guessed words
    dispatch(guessWord(currentGuess))
    // TODO - check against secretWord and update success if needed
    setCurrentGuess('')
  }

  // if (success) {
  //   <div data-test="component-input"/>
  // }

  return (
    <>
    {!success && 
    <div data-test="component-input">
      <form className="form-inline">
        <input data-test="input-box" className="mb-2 mx-sm-3" type="text"
        placeholder="enter guess"
        value={currentGuess}
        onChange={e => setCurrentGuess(e.target.value)}
        />
        <button 
        data-test="submit-button" className="btn btn-primary mb-2"
        onClick={submitHandler}
        >submit</button>
      </form>
    </div>
    }
    </>
  )
}
export default Input