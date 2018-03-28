import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import UserContainer from './UserContainer';
import LoginContainer from './LoginContainer';
import ConversationContainer from './ConversationContainer';
import { authorizeUser } from '../actions/actions';

class AuthContainer extends React.Component {
  componentDidMount() {
    if (localStorage.length === 0) {
      console.log('com did mount auth');
      this.props.history.push('/login');
    } else {
      this.props.dispatchAuthorizeUser();
    }
  }

  render() {
    if (!this.props.user.id) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <Switch>
            <Route path="/conversation" component={ConversationContainer} />
            <Route path="/dashboard" component={UserContainer} />
            <Redirect path="*" to="/dashboard" />
          </Switch>
        </div>
      );
    }
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));
