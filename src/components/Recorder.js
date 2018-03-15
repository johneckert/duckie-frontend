import React from 'react';
import VoicePlayer from '../react-voice-components/VoicePlayer';
import VoiceRecognition from '../react-voice-components/VoiceRecognition';

const Recorder = props => {
  return (
    <div>
      Recorder
      <button onClick={props.toggleListening}>Start Listening</button>
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
