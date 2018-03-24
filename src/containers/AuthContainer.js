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
      this.props.history.push('/login');
    } else {
      this.props.dispatchAuthorizeUser();
    }
  }

  render() {
    if (this.props.loggedIn === 'loading') {
      return <div>Loading</div>;
    }
    return (
      <div className="conversation-container">
        <Switch>
          <Route path="/conversation" component={ConversationContainer} />
          <Route path="/dashboard" component={UserContainer} />
          <Redirect path="*" to="/dashboard" />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthContainer));

{
  /* <Redirect from="/login" to="/dashboard" />
<Redirect from="/" to="/dashboard" />
//
<Redirect from="/conversation" to="/login" />
<Redirect from="/dashboard" to="/login" />
<Redirect from="/" to="/login" /> */
}
