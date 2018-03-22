import React, { Component } from 'react';
import Header from './components/Header';
import ConversationContainer from './containers/ConversationContainer.js';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = { user: { id: 1 } };
  render() {
    return (
      <div className="background">
        <Header />
        <Switch>
          <Route path="/conversation" component={ConversationContainer} />
          <Redirect from="/" to="/conversation" />
        </Switch>
      </div>
    );
  }
}

export default App;
