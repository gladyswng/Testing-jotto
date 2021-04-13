import React from 'react'
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'
import Input from './components/Input'


interface AppProps {

}

const App: React.FC<AppProps> = ({}) => {

  // TODO - get props from shared state
  const success = false
  const secretWord = 'party'
  const guessedWords: { guessedWord: string, letterMatchCount: number}[] = []


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