import React from 'react';
import CreateAccountForm from '../components/CreateAccountForm';
import SignInForm from '../components/SignInForm';
import TinyDuck from '../components/TinyDuck';
import { connect } from 'react-redux';

class LoginContainer extends React.Component {
  state = {
    haveAccount: true
  };

  componentDidMount() {
    if (localStorage.length !== 0) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  toggleLogIn = () => {
    this.setState({ haveAccount: !this.state.haveAccount });
  };

  render() {
    return (
      <div className="conversation-container">
        <TinyDuck />
        {this.state.haveAccount ? (
          <SignInForm toggleLogIn={this.toggleLogIn} />
        ) : (
          <CreateAccountForm toggleLogIn={this.toggleLogIn} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(LoginContainer);
