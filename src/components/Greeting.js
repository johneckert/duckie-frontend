import React from 'react';
import { connect } from 'react-redux';

const Greeting = props => {
  if (!props.user.firstName) {
    return (
      <span className="dashboard-loader">
        <div className="loading-dot one" />
        <div className="loading-dot two" />
        <div className="loading-dot three" />
      </span>
    );
  }
  return <div className="dashboard-header">Welcome back, {props.user.firstName}!</div>;
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Greeting);
