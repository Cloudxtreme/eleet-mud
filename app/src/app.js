import { Link } from 'react-router';
let React = require('react');

const App = React.createClass({
  render() {
    return (
      <div>
        <h1 className='centered'>Eleet Mud</h1>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
