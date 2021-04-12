import React from 'react'

interface GuessedWordsProps {
  guessedWords: {
    guessedWord: string,
    letterMatchCount: number
  }[]

} 

const GuessedWords: React.FC<GuessedWordsProps> = ({ guessedWords }) => {

  const guessedWordRows = guessedWords.map((word, index) => (
    <tr data-test="guessed-word" key={index}>
      <td>{word.guessedWord}</td>
      <td>{word.letterMatchCount}</td>
    </tr>
  ))

  return (
    <div data-test="component-guessed-words">
      {guessedWords.length === 0? 
      <span data-test="guess-instructions">
        Try to guess the word!
      </span>
    
      :

      <div data-test="guessed-words">
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Geuss</th>
              <th>Matching Letters</th>
            </tr>
            <tbody>
              { guessedWordRows }
            </tbody>
          </thead>
        </table>
        
      </div>}
      
    </div>
  )
}
export default GuessedWords