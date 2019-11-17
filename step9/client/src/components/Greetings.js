import React, { useState, useEffect, useRef } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Greetings = ({ drizzle, account, serviceFee }) => {
  const refFirstField = useRef(null);

  const [greetings, setGreetings] = useState('');

  useEffect(() => {
    M.AutoInit();

    // give focus to the first field
    if (refFirstField !== null) {
      refFirstField.current.focus();
    }

    // eslint-disable-next-line
  }, []);

  const onChange = e => {
    setGreetings(e.target.value);
  };

  const onSaveGreetings = () => {
    const { Greetings } = drizzle.contracts;

    // save the new greetings
    Greetings.methods
      .setGreetings(greetings)
      .send({ from: account, gas: 500000, value: serviceFee })
      .on('error', err => {
        console.error(err);
      });
  };

  return (
    <div className='row'>
      <div className='col s9 input-field'>
        <textarea
          className='materialize-textarea has-character-counter'
          ref={refFirstField}
          type='text'
          name='message'
          value={greetings}
          data-length={50}
          onChange={onChange}
          style={{ height: '4rem' }}
        />

        <label htmlFor='title' className='active'>
          Enter a new Greetings
        </label>
      </div>
      <div className='col s3 input-field'>
        <a
          href='#!'
          className='waves-effect waves-light btn left primary-content blue'
          onClick={() => onSaveGreetings()}
          style={{ margin: '5px' }}
        >
          Send
        </a>
      </div>
    </div>
  );
};

export default Greetings;
