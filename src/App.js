import React from 'react';

import Congrats from './components/Congrats/Congrats';
import GuessedWords from './components/GuessedWords/GuessedWords';

function App() {
  return (
    <div className='container'>
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{guessedWord: 'trian', letterMatchCount: 3}]} />
    </div>
  );
}

export { App };
