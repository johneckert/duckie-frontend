import React from 'react';
import { connect } from 'react-redux';
import VoiceRecognition from '../react-voice-components/VoiceRecognition';

const Recorder = props => {
  return (
    <div>
      {props.listening ? (
        <VoiceRecognition
          continuous
          onStart={props.handleSpeechBegin}
          onEnd={props.handleSpeechEnd}
          onResult={props.handleResult}
          endSentence={props.endSentence}
        />
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return { listening: listening };
};

export default connect(mapStateToProps)(Recorder);
