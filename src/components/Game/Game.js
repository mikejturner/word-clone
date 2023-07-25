import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessTracker from '../GuessTracker';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(value) {
    const updatedGuesses = [
      ...guesses,
      { id: crypto.randomUUID(), value: value },
    ];
    setGuesses(updatedGuesses);
  }

  return (
    <>
      <GuessTracker guesses={guesses} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
