import React, { Component } from 'react';
import Header from './components/Header';
import AuthContainer from './containers/AuthContainer';
// import ConversationContainer from './containers/ConversationContainer';
// import UserContainer from './containers/UserContainer';
import LoginContainer from './containers/LoginContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <Switch>
          <AuthContainer />
          <Route path="/login" component={LoginContainer} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

export default connect(mapStateToProps)(App);
