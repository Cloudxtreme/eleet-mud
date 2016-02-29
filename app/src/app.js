import { Link } from 'react-router';
let React = require('react');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>MyApp</h1>
        <Link to='/newGame'>New Game</Link>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
