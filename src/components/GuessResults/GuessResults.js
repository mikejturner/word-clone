import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guesses }) {
  const filledGuesses = [...guesses].splice(0, NUM_OF_GUESSES_ALLOWED);
  const numBlankGuesses =
    filledGuesses.length < NUM_OF_GUESSES_ALLOWED
      ? NUM_OF_GUESSES_ALLOWED - filledGuesses.length
      : 0;
  const blankGuesses = range(numBlankGuesses).map((index) => '     ');
  const guessesToDisplay = [...filledGuesses, ...blankGuesses];

  return (
    <div className="guess-results">
      {guessesToDisplay.map((guess, index) => {
        return <Guess key={index} guess={guess} />;
      })}
    </div>
  );
}

export default GuessResults;
