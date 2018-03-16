import React from 'react';
import TranscriptHeader from '../components/TranscriptHeader';
import Recorder from '../components/Recorder.js';
import Transcript from '../components/Transcript';
import BASE_URL from '../urls.js';

class TranscriptionContainer extends React.Component {
  state = {
    conversation: {
      user_id: null,
      transcript: ''
    },
    listening: false
  };

  componentDidMount() {
    this.setState({ conversation: { ...this.state.conversation, user_id: this.props.user.id } });
  }

  toggleListening = () => {
    this.setState({ listening: !this.state.listening });
  };

  //Executes when speech to text begins listening
  handleSpeechBegin = event => {
    console.log('Begin');
  };
  //During speech to text updates transcript in state.
  handleResult = event => {
    let newText = event.finalTranscript;
    let updatedTranscript = this.state.conversation.transcript.concat(newText);
    console.log('updatedTranscript: ', updatedTranscript);
    this.setState(
      { conversation: { ...this.state.conversation, transcript: updatedTranscript } },
      () => {
        console.log('state before POST:', this.state.conversation);
      }
    );
  };

  //Executes when speech to text stops listening
  handleSpeechEnd = event => {
    console.log('End', this.state.conversation);
    this.createConversation();
  };

  createConversation = () => {
    return fetch(BASE_URL + 'users/' + this.props.user.id + '/conversations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.conversation)
    })
      .then(keywords => keywords.json())
      .then(json => {
        console.log(('response:', json));
        this.props.getKeyWords(json);
      });
  };

  render() {
    return (
      <div>
        <TranscriptHeader />
        <Recorder
          listening={this.state.listening}
          toggleListening={this.toggleListening}
          handleSpeechBegin={this.handleSpeechBegin}
          handleSpeechEnd={this.handleSpeechEnd}
          handleResult={this.handleResult}
        />
        <Transcript transcript={this.state.conversation.transcript} />
      </div>
    );
  }
}

export default TranscriptionContainer;
