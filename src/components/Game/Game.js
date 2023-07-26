import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { getGameState } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const updatedGuesses = [...guesses, tentativeGuess];
    setGuesses(updatedGuesses);
  }

  const gameState = getGameState(guesses, answer, NUM_OF_GUESSES_ALLOWED);

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameState !== 'in-progress'}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameState === 'win' && (
        <Banner type="happy" numGuesses={guesses.length} answer={answer} />
      )}
      {gameState === 'lose' && (
        <Banner type="sad" numGuesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
