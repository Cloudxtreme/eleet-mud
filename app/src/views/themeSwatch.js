import { Link } from 'react-router';
let React = require('react');

const ThemeSwatch = React.createClass({
  render() {
    return (
      <div className={ 'theme-swatch ' + this.props.theme + '-theme-swatch' }>
        { this.props.theme }
      </div>
    );
  }
});

module.exports = ThemeSwatch;
