import React from 'react';

function GuessTracker({ guesses }) {
  console.log(guesses);
  console.log(typeof guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => {
        return (
          <p key={guess.id} className="guess">
            {guess.value}
          </p>
        );
      })}
    </div>
  );
}

export default GuessTracker;
