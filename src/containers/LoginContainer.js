import React from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import SignInForm from '../components/SignInForm';

class LoginContainer extends React.Component {
  state = {
    haveAccount: true
  };

  render() {
    return <div>{this.state.haveAccount ? <SignInForm /> : <CreateAccountForm />}</div>;
  }
}

export default LoginContainer;
