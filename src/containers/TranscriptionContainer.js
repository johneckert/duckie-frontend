import React from 'react';
import { connect } from 'react-redux';
import TranscriptHeader from '../components/TranscriptHeader';
import Recorder from '../components/Recorder.js';
import Transcript from '../components/Transcript';
import ListenButton from '../components/ListenButton';
import BASE_URL from '../urls.js';

class TranscriptionContainer extends React.Component {
  // state = {
  //   conversation: {
  //     id: null,
  //     user_id: null,
  //     transcript: '', // 'I like to eat cheese while learning javascript and Ruby.  It helps me understand conditionals and functions.' //should be empty string when not testing
  //     created_at: ''
  //   },
  //   listening: false
  // };

  updateInterval;

  componentDidMount() {
    this.createConversation();
  }

  toggleListening = () => {
    this.setState({ listening: !this.state.listening });
  };

  //Executes when speech to text begins listening
  handleSpeechBegin = event => {
    console.log('Begin');
    this.createConversation();
    this.updateInterval = setInterval(this.updateConversation, 6500);
  };

  //During speech to text updates transcript in state.
  handleResult = event => {
    let newText = event.finalTranscript;
    let updatedTranscript = this.state.conversation.transcript.concat(newText);
    this.setState(
      { conversation: { ...this.state.conversation, transcript: updatedTranscript } },
      () => {
        console.log('state before POST:', this.state.conversation);
      }
    );
  };

  endSentence = () => {
    // add punctuation
    let endedSentence = this.state.conversation.transcript.concat('. ');
    //format text (capitalize first letter, etc)
    let updatedTranscript = endedSentence.replace(
      /.+?[\.\?\!](\s|$)/g,
      txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
    this.setState(
      { conversation: { ...this.state.conversation, transcript: updatedTranscript } },
      () => {}
    );
  };

  //Executes when stops listening is pressed
  handleSpeechEnd = event => {
    this.updateConversation();
    clearInterval(this.updateInterval);
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
      .then(response => response.json())
      .then(json => {
        console.log('create fetch response');
        this.setState({
          conversation: json
        });
      });
  };

  updateConversation = () => {
    if (this.state.conversation.transcript !== '') {
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
        .then(keywords => keywords.json())
        .then(json => {
          console.log('updated fetch response');
          this.props.getKeyWords(json);
        });
    }
  };

  render() {
    return (
      <div className="transcript-item">
        <span className="header-item">
          <TranscriptHeader />
          <ListenButton toggleListening={this.toggleListening} />
        </span>
        <Recorder
          toggleListening={this.toggleListening}
          handleSpeechBegin={this.handleSpeechBegin}
          handleSpeechContinue={this.handleSpeechContinue}
          handleSpeechEnd={this.handleSpeechEnd}
          handleResult={this.handleResult}
          endSentence={this.endSentence}
        />
        <Transcript />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //I think this all just gets passed
    user: state.user,
    colors: state.colors,
    conversation: conversation,
    listening: listening
  };
};

export default connect(mapStateToProps)(TranscriptionContainer);
