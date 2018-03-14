import React from 'react';
import TranscriptHeader from '../components/TranscriptHeader';
import Recorder from '../components/Recorder.js';
import Transcript from '../components/Transcript';

class TranscriptionContainer extends React.Component {
  state = {
    transcript: ''
  };

  handleSpeechBegin = event => {
    console.log('Begin, ', event.target.value);
  };

  handleSpeechEnd = event => {
    console.log('End, ', event.target.value);
  };

  handleResult = event => {
    let newText = event.finalTranscript;
    let updatedTranscript = this.state.transcript.concat(` ${newText}`);
    this.setState({ transcript: updatedTranscript });
  };

  render() {
    return (
      <div>
        <TranscriptHeader />
        <Recorder
          handleSpeechBegin={this.handleSpeechBegin}
          handleSpeechEnd={this.handleSpeechEnd}
          handleResult={this.handleResult}
        />
        <Transcript transcript={this.state.transcript} />
      </div>
    );
  }
}

export default TranscriptionContainer;
