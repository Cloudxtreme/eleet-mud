import { Link } from 'react-router';
let React = require('react');

import MenuBar from './menuBar';

const App = React.createClass({
  render() {
    return (
      <div className="app-title-container">
        <Link to="/">
          <h1 className="app-title centered">Eleet Mud</h1>
        </Link>
        <MenuBar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
