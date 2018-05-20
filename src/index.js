import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import { createLogger } from 'redux-logger';
import App from './containers/App.js';
import './containers/index.css';
import registerServiceWorker from './registerServiceWorker';
import { searchUsers } from './reducers';
import 'tachyons';

// const logger = createLogger();
const store = createStore(searchUsers/*, applyMiddleware(logger)*/)

ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>, document.getElementById('root'));

registerServiceWorker();
