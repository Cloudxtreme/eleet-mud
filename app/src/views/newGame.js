let React = require('react');

import Constants from '../constants';
import PlayerActions from '../actions/playerActions';

import NameStep from './newGame/nameStep';
import ClassStep from './newGame/classStep';

// index keyed object to store the steps in the new character creation process
let stepMap = undefined;
let getStepMap = () => {
  if (stepMap !== undefined) return stepMap;

  let steps = [NameStep, ClassStep];
  stepMap = steps.reduce((memo, step, i) =>{
    memo[i] = step;
    return memo;
  }, {});

  return stepMap;
}

const NewGame = React.createClass({
  componentDidMount () {
  },

  onStepCompleted () {
    // TODO, if completed last step then enter playable game
    this.setState({ currentStep: this.state.currentStep + 1 });
  },

  getInitialState() {
    return {
      currentStep: 0
    };
  },

  render() {
    let StepCmp = getStepMap()[this.state.currentStep];

    return (
      <div className="container">
        <div className="row">
          <p>Welcome, wanderer.</p>
        </div>

        <div className="row">
          { <StepCmp onSubmit={ this.onStepCompleted }/> }
        </div>

      </div>
    );
  }
});

module.exports = NewGame;
