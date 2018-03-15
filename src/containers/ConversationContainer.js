import React, { Component } from 'react';
import Header from '../components/Header';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordContainer from '../components/KeywordArea';

class ConversationContainer extends Component {
  state = {
    user: {
      id: 1,
      username: 'John'
    }
  };

  render() {
    return (
      <div>
        <Header />
        <HeroDuck />
        <TranscriptionContainer user={this.state.user} />
        <KeywordContainer />
      </div>
    );
  }
}

export default ConversationContainer;
