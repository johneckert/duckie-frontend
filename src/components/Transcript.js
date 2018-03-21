import React from 'react';
import { connect } from 'react-redux';

const Transcript = props => {
  return (
    <div className="transcript-box">
      {props.transcript === '' ? (
        <div className="instruction-text">Press Start Listening to Begin</div>
      ) : (
        <div className="transcript-text">{props.transcript}</div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { transcript: state.conversation.transcript };
};

export default connect(mapStateToProps)(Transcript);
