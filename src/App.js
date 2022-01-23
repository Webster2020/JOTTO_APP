import React from 'react';

import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';
import Input from './components/Input/Input';

function App() {
  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div 
      data-test='component-app'
      className='container'
    >
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
}

export { App };
