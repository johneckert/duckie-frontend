import React from 'react';
import { connect } from 'react-redux';
import VoiceRecognition from './VoiceRecognition';

const Recorder = props => {
  return <div>{props.listening ? <VoiceRecognition continuous /> : null}</div>;
};

const mapStateToProps = state => {
  return { listening: state.listening };
};

export default connect(mapStateToProps)(Recorder);
