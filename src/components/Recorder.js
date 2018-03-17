import React from 'react';
import VoiceRecognition from '../react-voice-components/VoiceRecognition';

const Recorder = props => {
  return (
    <div>
      <button onClick={props.toggleListening} className="listen-button">
        {props.listening ? 'STOP LISTENING' : 'START LISTENING'}
      </button>
      {props.listening ? (
        <VoiceRecognition
          continuous
          onStart={props.handleSpeechBegin}
          onEnd={props.handleSpeechEnd}
          onResult={props.handleResult}
        />
      ) : null}
    </div>
  );
};

export default Recorder;
