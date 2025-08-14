/*
Real-Time Character Counter
Requirements:
Textarea for typing a message.
Show remaining characters (max 100).
When count reaches 0, prevent further typing and show “Limit reached” in red.
*/

import React, { useState } from 'react';

const CharacterCounter = () => {
  const MAX_CHAR = 100;
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;

    // Only update state if input is within the limit
    if (input.length <= MAX_CHAR) {
      setText(input);
    }
  };

  const remaining = MAX_CHAR - text.length;
  const isLimitReached = remaining === 0;

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'Arial' }}>
      <h3>Type your message:</h3>
      <textarea
        value={text}
        onChange={handleChange}
        rows="6"
        cols="50"
        placeholder="Start typing..."
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderColor: isLimitReached ? 'red' : '#ccc',
        }}
      />
      <div style={{ marginTop: '10px' }}>
        {isLimitReached ? (
          <span style={{ color: 'red', fontWeight: 'bold' }}>Limit reached</span>
        ) : (
          <span>Remaining characters: {remaining}</span>
        )}
      </div>
    </div>
  );
};

export default CharacterCounter;
