import { Link } from 'react-router';
let React = require('react');

const Splash = React.createClass({
  onLinkMouseOver(e) {
    console.log('link mouse over');
    console.log(arguments);
  },

  render() {
    return (
      <div className='centered'>
        <div>
          <Link to='/newGame' onMouseOver={ this.onLinkMouseOver }>New Game</Link>
        </div>
        <div>
          <Link to='/continue' onMouseOver={ this.onLinkMouseOver }>Continue</Link>
        </div>
        <div>
          <Link to='/options' onMouseOver={ this.onLinkMouseOver }>Options</Link>
        </div>
      </div>
    );
  }
});

module.exports = Splash;
