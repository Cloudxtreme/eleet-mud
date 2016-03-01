import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

let App = require('./app');
let Bootstrapper = require('./bootstrapper');
let NewGame = require('./views/newGame');
let Splash = require('./views/splash');

$(document).ready(function(){
  Bootstrapper.bootstrap();

  render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="splash" component={Splash} />
        <Route path="newGame" component={NewGame} />
      </Route>
    </Router>
  ), $('[data-role="main-app-container"]').get(0));
});
