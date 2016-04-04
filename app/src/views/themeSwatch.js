import { Link } from 'react-router';
let React = require('react');

import ThemeActions from '../actions/themeActions';

const ThemeSwatch = React.createClass({
  swatchClicked () {
    ThemeActions.set(this.props.theme);
  },

  render() {
    return (
      <div className={ 'theme-swatch ' + this.props.theme + '-theme-swatch' } onClick={ this.swatchClicked }>
        { /*this.props.theme*/ }
      </div>
    );
  }
});

module.exports = ThemeSwatch;
