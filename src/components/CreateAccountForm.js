import React from 'react';
import { connect } from 'react-redux';
import { logIn, createUser, resetError } from '../actions/actions';

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
    this.props.dispatchResetError();
  };

  handleCreateClick = event => {
    event.preventDefault();
    this.props.dispatchCreateUser(this.state);
  };

  handleChange = event => {
    console.log('f', this.state.firstName, 'l', this.state.lastName);
    this.setState({ ...this.state, [event.target.name]: event.target.value });
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
            name="firstName"
            type="text"
            id="firstName"
            onChange={this.handleChange}
            autoComplete="given-name"
          />
          <label className="login-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            className="login-input"
            name="lastName"
            type="text"
            id="lastName"
            onChange={this.handleChange}
            autoComplete="family-name"
          />
          <label className="login-label" htmlFor="email">
            EMAIL
          </label>
          <input
            className="login-input"
            name="email"
            type="text"
            id="email"
            onChange={this.handleChange}
            autoComplete="email"
          />
          <label className="login-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            className="login-input"
            name="password"
            type="password"
            id="password"
            onChange={this.handleChange}
            autoComplete="current-password"
          />
          <button className="login-button" onClick={event => this.handleCreateClick(event)}>
            CONTINUE
          </button>
          <button className="create-acnt-button" onClick={event => this.handleCancelClick(event)}>
            CANCEL
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
    dispatchCreateUser: user => dispatch(createUser(user)),
    dispatchLogIn: ({ email, password }) => dispatch(logIn(email, password)),
    dispatchResetError: () => dispatch(resetError())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccountForm);
