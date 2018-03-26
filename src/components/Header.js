import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/actions';

const Header = props => {
  return (
    <div className="header">
      <h1 className="title">{'</Duckie>'}</h1>
      <ul className="nav-list">
        <li className="nav-li">
          <a href="/conversation" className="nav-link">
            Conversation
          </a>
        </li>
        <li className="nav-li">
          <a href="/dashboard" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-li">
          {props.loggedIn ? (
            <a href="/login" className="nav-link" onClick={() => props.dispatchLogOut()}>
              Log Out
            </a>
          ) : (
            <a href="/login" className="nav-link" onClick={() => props.dispatchLogOut()}>
              Log In
            </a>
          )}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
