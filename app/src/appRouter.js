import { Router, Route, browserHistory } from 'react-router';
import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

let App = require('./app');
let Bootstrapper = require('./bootstrapper');
let NewGame = require('./views/newGame');
let Splash = require('./views/splash');
let Game = require('./views/game');

// Some other module is messing with the jquery imports later on.
window.$ = $;

// Figure out what the routes should actually be.  For most stuff in the game,
// using the browser forward/back would just mess with stuff in a bad way.
// Manipulating the game window should not be possible with back/forward, so
// it probably doesn't make sense to use the react router for navigating those displays.
$(document).ready(function(){
  Bootstrapper.bootstrap();

  render((
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Splash} />
        <Route path="newGame" component={NewGame} />
        <Route path="play" component={Game} />
      </Route>
    </Router>
  ), $('[data-role=main-app-container]').get(0));
});
