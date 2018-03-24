import React from 'react';
import { connect } from 'react-redux';
import HeroDuck from '../components/HeroDuck';
import TranscriptionContainer from './TranscriptionContainer';
import KeywordArea from '../components/KeywordArea';

class ConversationContainer extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.history.push('/login');
    }
  }

  render() {
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
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(ConversationContainer);
