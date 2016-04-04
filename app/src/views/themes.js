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
        { themeNames.map((theme) => <ThemeSwatch theme={ theme }/>) }
      </div>
    );
  }
});

module.exports = Themes;
