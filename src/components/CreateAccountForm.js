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
        <h2>Create Account</h2>
        <form>
          <label htmlFor="firstName">FIRST NAME</label>
          <input type="text" id="firstName" onChange={this.handleFirstChange} />
          <label htmlFor="lastName">LAST NAME</label>
          <input type="text" id="lastName" onChange={this.handleLastChange} />
          <label htmlFor="email">EMAIL</label>
          <input type="text" id="email" onChange={this.handleEmailChange} />
          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" onChange={this.handlePasswordChange} />
          <button onClick={event => this.handleCreateClick(event)}>CONTINUE</button>
          <button onClick={event => this.handleCancelClick(event)}>CANCEL</button>
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
