import React, { Component } from 'react';
import Header from './components/Header';
import AuthContainer from './containers/AuthContainer';
// import ConversationContainer from './containers/ConversationContainer';
// import UserContainer from './containers/UserContainer';
import LoginContainer from './containers/LoginContainer';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="*" component={AuthContainer} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default withRouter(connect(mapStateToProps)(App));
