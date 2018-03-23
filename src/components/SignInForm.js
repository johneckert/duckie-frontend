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
        <h2>Sign In</h2>
        <form>
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" onChange={this.handleEmailChange} autoComplete="email" />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            id="password"
            onChange={this.handlePasswordChange}
            autoComplete="current-password"
          />
          <button onClick={event => this.handleSignInClick(event)}>SIGN IN</button>
          <button onClick={event => this.handleToggleClick(event)}>CREATE ACCOUNT</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogIn: ({ email, password }) => dispatch(logIn(email, password))
  };
};

export default connect(null, mapDispatchToProps)(SignInForm);
