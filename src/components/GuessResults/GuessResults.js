import React from 'react';

function GuessResults({ guesses }) {
  console.log(guesses);
  console.log(typeof guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p key={index} className="guess">
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
