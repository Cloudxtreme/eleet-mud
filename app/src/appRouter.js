import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

let App = require('./app');
let NewGame = require('./views/newGame');
console.log('a');
$(document).ready(function(){
  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="newGame" component={NewGame} />
      </Route>
    </Router>
  ), $('[data-role="main-app-container"]').get(0));
});
