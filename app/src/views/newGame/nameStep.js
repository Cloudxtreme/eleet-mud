let React = require('react');

import Constants from '../../constants';
import PlayerActions from '../../actions/playerActions';

const NameStep = React.createClass({

  propTypes: {
    onSubmit: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      name: ''
    };
  },

  onNameInputChange(e) {
    this.setState({ name: e.target.value });
  },

  onNameOkClick() {
    PlayerActions.setName(this.state.name);
    this.props.onSubmit();
  },

  render() {
    return (
      <div>
        <p>What is your name?</p>
        <input type='text' value={ this.state.name } onChange={ this.onNameInputChange } />

        <div>
          <button onClick={ this.onNameOkClick }>Ok</button>
        </div>
      </div>
    );
  }
});

module.exports = NameStep;
