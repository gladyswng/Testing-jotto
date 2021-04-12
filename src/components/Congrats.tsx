import React from 'react'

interface CongratsProps {
  success?: boolean
}

const Congrats: React.FC<CongratsProps> = ({ success }) => {

  return (
    <div>
      {success? 
        <div data-test="component-congrats">
          <span data-test="congrats-message">Congratulations! You guessed the word</span>
        </div>
        :
        <div data-test="component-congrats">

        </div>
      }
    </div>
  )
}
export default Congrats