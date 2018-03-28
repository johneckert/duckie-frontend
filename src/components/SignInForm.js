import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/actions';

class SignInForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleToggleClick = event => {
    event.preventDefault();
    this.props.toggleLogIn();
  };

  handleSignInClick = event => {
    event.preventDefault();
    this.props.dispatchLogIn(this.state);
  };

  handleEmailChange = event => {
    this.setState({ ...this.state, email: event.target.value });
  };
  handlePasswordChange = event => {
    this.setState({ ...this.state, password: event.target.value });
  };

  render() {
    return (
      <div className="login-panel">
        <div className="login-title">Sign In</div>
        <form>
          <label className="login-label" htmlFor="email">
            EMAIL
          </label>
          <input
            className="login-input"
            type="text"
            id="email"
            onChange={this.handleEmailChange}
            autoComplete="email"
          />
          <label className="login-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
            autoComplete="current-password"
          />
          <button className="login-button" onClick={event => this.handleSignInClick(event)}>
            SIGN IN
          </button>
          <button className="create-acnt-button" onClick={event => this.handleToggleClick(event)}>
            CREATE ACCOUNT
          </button>
        </form>
        {this.props.error ? <p className="error-message">{this.props.error}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { error: state.error };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogIn: ({ email, password }) => dispatch(logIn(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
