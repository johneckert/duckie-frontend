import React from 'react';
import { connect } from 'react-redux';

const Greeting = props => {
  console.log('greeting props', props);
  if (!props.user.firstName) {
    return <div>Loading</div>;
  }
  return <div className="transcript-header">Welcome, {props.user.firstName}!</div>;
};

const mapStateToProps = state => {
  console.log('greeting state: ', state);
  return { user: state.user };
};

export default connect(mapStateToProps)(Greeting);
