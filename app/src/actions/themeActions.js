import { Router } from 'react-router';

import AppDispatcher from '../appDispatcher';
import Constants from '../constants';

let Actions = {

  set (theme) {
    AppDispatcher.dispatch({
      actionType: Constants.ACTIONS.THEMES.SET,
      theme: theme
    });
  }

};

module.exports = Actions;
