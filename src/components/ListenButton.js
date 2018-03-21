import React from 'react';
import { connect } from 'react-redux';

const ListenButton = props => {
  return (
    <button onClick={props.toggleListening} className="listen-button">
      {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    listening: state.listening
  };
};

export default connect(mapStateToProps)(ListenButton);
