import React from 'react';
import { connect } from 'react-redux';
import TranscriptHeader from '../components/TranscriptHeader';
import Recorder from '../components/Recorder.js';
import Transcript from '../components/Transcript';
import ListenButton from '../components/ListenButton';
import { getKeywords, createConversation, uodateConversation } from '../actions/actions';

class TranscriptionContainer extends React.Component {
  componentDidMount(props) {
    this.props.dispatchCreateConversation(this.props.user.id, this.props.conversation);
  }

  render() {
    return (
      <div className="transcript-container">
        <span className="transcript-header-span">
          <TranscriptHeader />
          <ListenButton />
        </span>
        <Recorder />
        <Transcript />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    dispatchCreateConversation: (userId, conversation) =>
      dispatch(createConversation(userId, conversation))
  };
};

const mapStateToProps = state => {
  return {
    user: state.user,
    conversation: state.conversation
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptionContainer);
