import React from 'react';

function GuessInput({ guess, setGuess }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength="5"
        maxLength="5"
        pattern="[A-Z]{5,5}"
        title="5 letter word"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
