import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
  const result = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((num) => {
        const className = guess ? `cell ${result[num].status}` : 'cell';
        return (
          <span key={num} className={className}>
            {guess ? result[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
