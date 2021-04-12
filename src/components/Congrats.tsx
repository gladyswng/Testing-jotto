import React from 'react'

interface CongratsProps {
  success?: boolean
}

const Congrats: React.FC<CongratsProps> = ({ success }) => {

  return (
    <div>
      {success? 
        // if success 
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">Congratulations! You guessed the word</span>
        </div>
        :
        // if not success
        <div data-test="component-congrats">

        </div>
      }
    </div>
  )
}
export default Congrats