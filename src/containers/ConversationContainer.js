import React, { Component } from 'react';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordArea from '../components/KeywordArea';

class ConversationContainer extends Component {
  state = {
    user: {
      id: 1,
      username: 'John'
    },
    keywords: []
  };

  getKeyWords = json => {
    this.setState({ keywords: json });
    console.log('state after:', this.state.keywords);
  };

  render() {
    return (
      <div>
        <HeroDuck />
        <TranscriptionContainer user={this.state.user} getKeyWords={this.getKeyWords} />
        <KeywordArea keywords={this.state.keywords} />
      </div>
    );
  }
}

export default ConversationContainer;
