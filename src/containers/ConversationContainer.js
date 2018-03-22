import React, { Component } from 'react';
import { connect } from 'react-redux';
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
