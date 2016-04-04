import { Link } from 'react-router';
let React = require('react');

import MenuItem from './menuItem';

const MenuBar = React.createClass({
  getMenuItems () {
    return [
      'themes',
      'thangs',
      'whatsits'
    ];
  },

  render() {
    return (
      <div className="menu-bar">
        { this.getMenuItems().map((item) => <MenuItem item={ item } key={ item } />) }
      </div>
    );
  }
});

module.exports = MenuBar;
