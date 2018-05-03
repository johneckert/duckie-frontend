import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../actions/actions';

const Header = props => {
  const location = props.history.location.pathname;

  return (
    <div className="header">
      <h1 className="title">{'</Duckie>'}</h1>
      <div className="dropdown">
        <span id="hamburger">&#9776;</span>
        <div className="dropdown-content">
          <a
            href="/conversation"
            className={`nav-link ${location === '/conversation' ? 'underline' : ''}`}
          >
            Conversation
          </a>

          <a
            href="/dashboard"
            className={`nav-link ${location === '/dashboard' ? 'underline' : ''}`}
          >
            Dashboard
          </a>

          {props.loggedIn ? (
            <a href="/login" className="nav-link" onClick={() => props.dispatchLogOut()}>
              Log Out
            </a>
          ) : (
            <a
              href="/login"
              className={`nav-link ${location === '/login' ? 'underline' : ''}`}
              onClick={() => props.dispatchLogOut()}
            >
              Log In
            </a>
          )}
        </div>
      </div>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
