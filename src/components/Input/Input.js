import React from 'react';
// version with destructure useState
// v2:
// import { useState } from 'react';
import PropTypes from 'prop-types';

const Input = ({ success, secretWord }) => {
 
  const [currentGuess, setCurrentGuess] = React.useState('');
  // v2:
  // const [currentGuess, setCurrentGuess] = useState('');

  if (success) {
    return <div data-test='component-input' />;
  }

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input 
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={currentGuess}
          onChange={(e) => setCurrentGuess(e.target.value)}
        />
        <button
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={(e) => {
            e.preventDefault();
            setCurrentGuess('');
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  success: PropTypes.bool,
  secretWord: PropTypes.string.isRequired,
};

export default Input;