import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('running');

  function handleSubmitGuess(tentativeGuess) {
    const updatedGuesses = [...guesses, tentativeGuess];
    setGuesses(updatedGuesses);

    if (tentativeGuess === answer) {
      setGameState('won');
    } else if (updatedGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameState !== 'running'}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameState === 'won' && <WonBanner numGuesses={guesses.length} />}
      {gameState === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
