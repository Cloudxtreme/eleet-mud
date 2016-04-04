import { Link } from 'react-router';
let React = require('react');

import ThemeSwatch from './themeSwatch';

const themeNames = [
  'brown',
  'orange',
  'indigo',
  'pink',
  'teal'
];

const Themes = React.createClass({
  render() {
    return (
      <div>
        <h1>Pick a theme:</h1>
        <div className="theme-swatch-container">
          { themeNames.map((theme) => <ThemeSwatch key={ theme } theme={ theme }/>) }
        </div>
      </div>
    );
  }
});

module.exports = Themes;
