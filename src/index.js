import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import './containers/index.css';
// import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import { users } from './users';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
