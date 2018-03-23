import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/actions';

const Header = props => {
  return (
    <div className="header">
      <h1 className="title">{'</Duckie>'}</h1>
      <ul>
        <li>
          <a href="/conversation">Conversation</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <button onClick={() => props.dispatchLogOut()}>LOG OUT </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogOut: () => dispatch(logOut())
  };
};

export default connect(null, mapDispatchToProps)(Header);
