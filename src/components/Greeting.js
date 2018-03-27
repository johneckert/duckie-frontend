import React from 'react';
import { connect } from 'react-redux';

const Greeting = props => {
  console.log('greeting props', props);
  if (!props.user.firstName) {
    return <div>Loading</div>;
  }
  return <div className="dashboard-header">Welcome back, {props.user.firstName}!</div>;
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Greeting);
