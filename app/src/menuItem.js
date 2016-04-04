import { Link } from 'react-router';
let React = require('react');

const MenuItem = React.createClass({
  render() {
    return (
      <h2 className="menu-item-link">
        { this.props.item }
        <div className="menu-item-content">
          { this.props.children }
        </div>
      </h2>
    );
  }
});

module.exports = MenuItem;
