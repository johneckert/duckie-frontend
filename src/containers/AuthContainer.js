import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import UserContainer from './UserContainer';
import LoginContainer from './LoginContainer';
import ConversationContainer from './ConversationContainer';
import { authorizeUser } from '../actions/actions';

class AuthContainer extends React.Component {
  componentDidMount() {
    this.props.dispatchAuthorizeUser();
  }

  render() {
    return (
      <div className="conversation-container">
        <Switch>
          <Route
            path="/conversation"
            render={() => {
              return this.props.loggedIn ? <ConversationContainer /> : <LoginContainer />;
            }}
          />
          <Route
            path="/dashboard"
            render={() => {
              return this.props.loggedIn ? <UserContainer /> : <LoginContainer />;
            }}
          />
          <Route
            path="/login"
            render={() => {
              return this.props.loggedIn ? <LoginContainer /> : <UserContainer />;
            }}
          />
        </Switch>
      </div>
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

{
  /* <Redirect from="/login" to="/dashboard" />
<Redirect from="/" to="/dashboard" />
//
<Redirect from="/conversation" to="/login" />
<Redirect from="/dashboard" to="/login" />
<Redirect from="/" to="/login" /> */
}
