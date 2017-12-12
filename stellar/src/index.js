import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CurrentPage from './CurrentPage';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter><CurrentPage /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
