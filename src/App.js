import React, { Component } from 'react';
import Header from './components/Header';
import ConversationContainer from './containers/ConversationContainer.js';
import './App.css';

class App extends Component {
  state = { user: { id: 1 } };
  render() {
    return (
      <div className="background">
        <Header />
        <ConversationContainer />
      </div>
    );
  }
}

export default App;
