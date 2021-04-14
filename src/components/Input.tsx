import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../reducers'

interface InputProps {
  secretWord?: string
  success?: boolean
}

const Input: React.FC<InputProps> = ({ secretWord }) => {
  const [ currentGuess, setCurrentGuess ] = React.useState<string>('')
  const success = useSelector((state:RootState) => state.success)
  const submitHandler = (e:React.SyntheticEvent) => {

    // TODO - update guessed words
    // TODO - check against secretWord and update success if needed
    e.preventDefault()
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