import React from 'react';

const ListenButton = props => {
  return (
    <button onClick={props.toggleListening} className="listen-button">
      {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
    </button>
  );
};

export default ListenButton;
