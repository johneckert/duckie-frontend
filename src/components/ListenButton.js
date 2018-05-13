import React from 'react';
import { connect } from 'react-redux';
import { toggleListening } from '../actions/actions';

const ListenButton = props => {
  return (
    <button onClick={props.dispatchToggleListening} className="listen-button">
      {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    listening: state.listening
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchToggleListening: () => dispatch(toggleListening())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListenButton);
