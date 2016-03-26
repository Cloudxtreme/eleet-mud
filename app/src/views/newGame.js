let React = require('react');

import Constants from '../constants';
import PlayerActions from '../actions/playerActions';
import PlayerStore from '../stores/playerStore'; // TODO, not needed?

const NewGame = React.createClass({
  componentDidMount() {
  },

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

  onNameOkClick() {
    PlayerActions.setName(this.state.name);
    this.setState({ step: Constants.NEW_GAME_STEPS.PLAYER_CLASS });
  },

  onClassClick(e) {
    var selectedClass = $(e.target).data('class');
    PlayerActions.setClass(selectedClass);
    this.props.history.push('play');
  },

  render() {
    let nameStep = (
      <div>
        <p>What is your name?</p>
        <input type='text' value={ this.state.name } onChange={ this.onNameInputChange } />

        <div>
          <button onClick={ this.onNameOkClick }>Ok</button>
        </div>
      </div>
    );

    let classStep = (
      <div>
        <p>Choose a profession.</p>
        <button onClick={ this.onClassClick } data-class='a'>a</button>
        <button onClick={ this.onClassClick } data-class='b'>b</button>
        <button onClick={ this.onClassClick } data-class='c'>c</button>
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
