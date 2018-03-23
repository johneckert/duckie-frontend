import React from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import SignInForm from '../components/SignInForm';

class LoginContainer extends React.Component {
  state = {
    haveAccount: true
  };

  toggleLogIn = () => {
    this.setState({ haveAccount: !this.state.haveAccount });
  };

  render() {
    return (
      <div>
        {this.state.haveAccount ? (
          <SignInForm toggleLogIn={this.toggleLogIn} />
        ) : (
          <CreateAccountForm toggleLogIn={this.toggleLogIn} />
        )}
      </div>
    );
  }
}

export default LoginContainer;
