import React from 'react'
import Congrats from './components/Congrats'
import GuessedWords from './components/GuessedWords'

interface AppProps {

}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div>
      <h1>Hey testing</h1>
      <button onClick={() => console.log('click')}>click</button>
      <Congrats />
      {/* <GuessedWords guessedWords={[]}/> */}
    </div>
  )
}
export default App