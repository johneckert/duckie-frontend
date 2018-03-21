import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import duckieReducer from './reducers/reducer';

const store = createStore(duckieReducer);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
