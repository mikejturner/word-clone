import React from 'react';

function Banner({ type, numGuesses, answer }) {
  if (type === 'happy') {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>
            {' '}
            {numGuesses} guess{numGuesses > 1 ? 'es' : ''}
          </strong>
          .
        </p>
      </div>
    );
  }

  if (type === 'sad') {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
}

export default Banner;
