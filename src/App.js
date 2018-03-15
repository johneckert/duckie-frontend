import React, { Component } from 'react';
import ConversationContainer from './containers/ConversationContainer.js';
import './App.css';

class App extends Component {
  state = { user: { id: 1 } };
  render() {
    return <ConversationContainer />;
  }
}

export default App;
