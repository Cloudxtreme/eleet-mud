let React = require('react');

import Constants from '../constants';
import PlayerActions from '../actions/playerActions';
import PlayerStore from '../stores/playerStore'; // TODO, not needed?

const NewGame = React.createClass({
  getInitialState() {
    return {
      step: Constants.NEW_GAME_STEPS.NAME,
      name: '',
      playerClass: ''
    };
  },

  onNameInputChange(e) {
    this.setState({ name: e.target.value });
  },

  onOkClick() {
    PlayerActions.setName(this.state.name);
    this.setState({ step: Constants.NEW_GAME_STEPS.PLAYER_CLASS });
  },

  render() {
    let nameStep = (
      <div>
        <p>What is your name?</p>
        <input type='text' value={ this.state.name } onChange={ this.onNameInputChange } />

        <button onClick={ this.onOkClick }>Ok</button>
      </div>
    );

    let classStep = (
      <div>
        <p>What is your profession?</p>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </div>
    );

    return (
      <div>
        <p>Welcome, wanderer.</p>
        { this.state.step == Constants.NEW_GAME_STEPS.NAME ? nameStep : classStep }
      </div>
    );
  }
});

module.exports = NewGame;
