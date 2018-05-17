import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<Card />, document.getElementById('root'));
registerServiceWorker();
