import React, { Component } from 'react';
import Header from '../components/Header';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordContainer from '../components/KeywordArea';

class ConversationContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <HeroDuck />
        <TranscriptionContainer />
        <KeywordContainer />
      </div>
    );
  }
}

export default ConversationContainer;
