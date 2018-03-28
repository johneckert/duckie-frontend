import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logOut } from '../actions/actions';

const Header = props => {
  const location = props.history.location.pathname;

  return (
    <div className="header">
      <h1 className="title">{'</Duckie>'}</h1>
      <ul className="nav-list">
        <li className="nav-li">
          <a
            href="/conversation"
            className={`nav-link ${location === '/conversation' ? 'underline' : ''}`}
          >
            Conversation
          </a>
        </li>
        <li className="nav-li">
          <a
            href="/dashboard"
            className={`nav-link ${location === '/dashboard' ? 'underline' : ''}`}
          >
            Dashboard
          </a>
        </li>
        <li className="nav-li">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
