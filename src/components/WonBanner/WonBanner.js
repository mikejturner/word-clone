import React from 'react';
import Banner from '../Banner';

function WonBanner({ numGuesses }) {
  return (
    <Banner
      status="happy"
      children={
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {' '}
            {numGuesses === 1 ? '1 guess' : `${numGuesses} guesses`}
          </strong>
          .
        </p>
      }
    />
  );
}

export default WonBanner;
