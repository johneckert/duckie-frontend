import React from 'react';
import TranscriptHeader from '../components/TranscriptHeader';
import Recorder from '../components/Recorder.js';
import Transcript from '../components/Transcript';
import BASE_URL from '../urls.js';

class TranscriptionContainer extends React.Component {
  state = {
    conversation: {
      user_id: 0,
      transcript: '',
      created_at: '',
      updated_at: ''
    },
    listening: false
  };

  componentDidMount() {
    this.setState({ conversation: { ...this.state.conversation, user_id: this.props.user.id } });
  }

  toggleListening = () => {
    this.setState({ listening: !this.state.listening });
  };

  handleSpeechBegin = event => {
    console.log('Begin, ', event.target.value);
  };

  handleSpeechEnd = event => {
    console.log('End, ', event.target.value);
    this.createConversation();
  };

  handleResult = event => {
    let newText = event.finalTranscript;
    let updatedTranscript = this.state.conversation.transcript.concat(` ${newText}`);
    this.setState(
      { transcript: updatedTranscript },
      console.log(this.state.conversation.transcript)
    );
  };

  createConversation = () => {
    return fetch(BASE_URL + 'users/' + this.props.user.id + '/conversations', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    });
  };

  updateConversation = () => {
    console.log(this.state.conversation.id);
    return fetch(
      BASE_URL + 'users/' + this.props.user.id + '/conversations/' + this.state.conversation.id,
      {
        method: 'PATCH',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.conversation)
      }
    )
      .then(res => res.json())
      .then(json => this.setState({ currentConversation: json }));
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
        <Transcript transcript={this.state.transcript} />
      </div>
    );
  }
}

export default TranscriptionContainer;
