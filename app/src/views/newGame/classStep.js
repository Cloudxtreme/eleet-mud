let React = require('react');

import Constants from '../../constants';
import PlayerActions from '../../actions/playerActions';

const ClassStep = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      playerClass: ''
    };
  },

  onClassClick(e) {
    var selectedClass = $(e.target).data('class');
    PlayerActions.setClass(selectedClass);
    this.props.onSubmit();
  },

  render() {
    return (
      <div>
        <p>Choose a profession.</p>
        <button onClick={ this.onClassClick } data-class='a'>a</button>
        <button onClick={ this.onClassClick } data-class='b'>b</button>
        <button onClick={ this.onClassClick } data-class='c'>c</button>
      </div>
    );
  }
});

module.exports = ClassStep;
