import React from 'react';
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

export default Recorder;
