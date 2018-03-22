import React, { Component } from 'react';
import Header from './components/Header';
import ConversationContainer from './containers/ConversationContainer';
import UserContainer from './containers/UserContainer';
import LoginContainer from './containers/LoginContainer';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <Header />
        <Switch>
          <Route path="/conversation" component={ConversationContainer} />
          <Route path="/dashboard" component={UserContainer} />
          <Route path="/login" component={LoginContainer} />
          <Redirect from="/" to="/conversation" />
        </Switch>
      </div>
    );
  }
}

export default App;
