import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordArea from '../components/KeywordArea';

class ConversationContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="conversation-container">
        <HeroDuck />
        <TranscriptionContainer className="transcript-item" />
        <KeywordArea className="keyword-item" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    keywords: state.keywords,
    colors: state.colors
  };
};

export default connect(mapStateToProps)(ConversationContainer);
