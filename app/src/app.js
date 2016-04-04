import { Link } from 'react-router';
let React = require('react');

import MenuBar from './menuBar';
import ThemeStore from './stores/themeStore';

const App = React.createClass({
  componentDidMount () {
    ThemeStore.addChangeListener(this.themeStoreChanged);
  },

  componentWillUnmount () {
    ThemeStore.removeChangeListener(this.themeStoreChanged);
  },

  themeStoreChanged () {
    this.setState({ theme: ThemeStore.get() });
  },

  getInitialState () {
    return { theme: ThemeStore.get() };
  },

  render() {
    return (
      <div data-role="app" className={ this.state.theme }>
        <div className="app-title-container">
          <Link to="/">
            <h1 className="app-title centered">Eleet Mud</h1>
          </Link>
          <MenuBar />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
