import React from 'react';
import VoicePlayer from '../react-voice-components/VoicePlayer';
import VoiceRecognition from '../react-voice-components/VoiceRecognition';

const Recorder = props => {
  return (
    <div>
      Recorder
      <VoiceRecognition
        continuous
        onStart={props.handleSpeechBegin}
        onEnd={props.handleSpeechEnd}
        onResult={props.handleResult}
      />
    </div>
  );
};

export default Recorder;
