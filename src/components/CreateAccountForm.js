import React from 'react';
import { connect } from 'react-redux';
import { logIn, createUser } from '../actions/actions';

class CreateAccountForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  handleCancelClick = event => {
    event.preventDefault();
    this.props.toggleLogIn();
  };

  handleCreateClick = event => {
    event.preventDefault();
    console.log('create form: ', this.state);
    this.props.dispatchCreateUser(this.state);
  };

  handleFirstChange = event => {
    this.setState({ ...this.state, firstName: event.target.value });
  };
  handleLastChange = event => {
    this.setState({ ...this.state, lastName: event.target.value });
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
        <div className="login-title">Create Account</div>
        <form>
          <label className="login-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            className="login-input"
            type="text"
            id="firstName"
            onChange={this.handleFirstChange}
            autoComplete="given-name"
          />
          <label className="login-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className="login-input"
            type="text"
            id="lastName"
            onChange={this.handleLastChange}
            autoComplete="family-name"
          />
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
          <button className="login-button" onClick={event => this.handleCreateClick(event)}>
            CONTINUE
          </button>
          <button className="create-acnt-button" onClick={event => this.handleCancelClick(event)}>
            CANCEL
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchCreateUser: user => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(CreateAccountForm);
