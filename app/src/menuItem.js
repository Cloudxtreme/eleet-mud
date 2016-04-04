import { Link } from 'react-router';
let React = require('react');

// TODO, could have an alt font or alt way to display when hovering
// over menu items...Like bigger, or with squiggles coming off the words

const MenuItem = React.createClass({
  render() {
    return (
      <Link to={ this.props.item }>
        <h2 className="menu-item-link">
          { this.props.item }
          <div className="menu-item-content">
            { this.props.children }
          </div>
        </h2>
      </Link>
    );
  }
});

module.exports = MenuItem;
