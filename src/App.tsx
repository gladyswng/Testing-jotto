import React from 'react'
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'

interface AppProps {

}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div data-test="component-app" className="container" >
      <h1>Jotto</h1>
      
      <Congrats success={true}/>
      <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3} ]}/>
    </div>
  )
}
export default App