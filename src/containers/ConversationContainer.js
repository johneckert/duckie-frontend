import React from 'react';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordArea from '../components/KeywordArea';

const ConversationContainer = props => {
  return (
    <div className="conversation-container">
      <HeroDuck />
      <TranscriptionContainer className="transcript-item" />
      <KeywordArea className="keyword-item" />
    </div>
  );
};

export default ConversationContainer;
