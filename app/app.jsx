import React from 'react';
import ReactDOM from 'react-dom';
import Text from './pages/child';
import { Router, Route } from 'react-router';
require('./app.css');

ReactDOM.render((<Router><Route path="/" component={Text} /></Router>), document.body);

