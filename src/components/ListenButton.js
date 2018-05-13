import React from 'react';
import BrowserDetection from 'react-browser-detection';
import { connect } from 'react-redux';
import { toggleListening } from '../actions/actions';

const ListenButton = props => {
  const BrowserHandler = {
    chrome: () => (
      <button onClick={props.dispatchToggleListening} className="listen-button">
        {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
      </button>
    ),
    default: () => (
      <button className="listen-button">
        {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
      </button>
    )
  };

  return <BrowserDetection>{BrowserHandler}</BrowserDetection>;
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
