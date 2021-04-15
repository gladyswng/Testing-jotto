import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getSecretWord } from './actions'
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import Input from './components/Input'
import { RootState } from './reducers'


interface AppProps {

}

const App: React.FC<AppProps> = ({}) => {

  // TODO - get props from shared state
  const success = useSelector((state:RootState) => state.success)
  const guessedWords = useSelector((state:RootState) => state.guessedWords)
 
  const secretWord = 'party'
 
  useEffect(() => {
    getSecretWord()
  }, [])
  return (
    <div data-test="component-app" className="container" >
      <h1>Jotto</h1>
      
      <Congrats success={true}/>
      <GuessedWords guessedWords={guessedWords}/>
      <Input success={success} secretWord={secretWord} />
    </div>
  )
}
export default App