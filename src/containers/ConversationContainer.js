import React, { Component } from 'react';
import Header from '../components/Header';
import HeroDuck from '../components/HeroDuck';
import TranscriptionArea from '../components/TranscriptionArea';
import KeywordArea from '../components/KeywordArea';

class ConversationContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <HeroDuck />
        <TranscriptionArea />
        <KeywordArea />
      </div>
    );
  }
}

export default ConversationContainer;
