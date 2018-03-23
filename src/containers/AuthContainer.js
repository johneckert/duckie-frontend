import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserContainer from './UserContainer';
import LoginContainer from './LoginContainer';
import ConversationContainer from './ConversationContainer';
import { authorizeUser } from '../actions/actions';

class AuthContainer extends React.Component {
  componentDidMount() {
    console.log('AuthContainer Hit!');
    this.props.dispatchAuthorizeUser();
  }

  render() {
    return (
      <Switch>
        <Route path="/conversation" component={ConversationContainer} />
        <Route path="/dashboard" component={UserContainer} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchAuthorizeUser: () => {
      dispatch(authorizeUser());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
