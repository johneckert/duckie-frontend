import React from 'react';
import { connect } from 'react-redux';

const Greeting = props => {
  return <div className="transcript-header">Welcome, {props.user.firstName}!</div>;
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Greeting);
