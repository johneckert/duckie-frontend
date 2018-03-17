import React from 'react';

const Transcript = props => {
  return (
    <div className="transcript-box">
      {props.transcript === '' ? (
        <div className="instruction-text">Press Start Listening to Begin</div>
      ) : (
        props.transcript
      )}
    </div>
  );
};

export default Transcript;
