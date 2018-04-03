import React, { Component } from 'react';
import Header from './components/Header';
import AuthContainer from './containers/AuthContainer';
import LoginContainer from './containers/LoginContainer';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BrowserDetection from 'react-browser-detection';
import './App.css';

const BrowserHandler = {
  chrome: () => <div />,
  default: browser => (
    <div className="browser-warning">
      Duckie uses the JavaScript Web Speech API and requires Chrome to operate
    </div>
  )
};

class App extends Component {
  render() {
    return (
      <div className="background">
        <BrowserDetection>{BrowserHandler}</BrowserDetection>
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
