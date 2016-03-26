import { Router } from 'react-router';

import AppDispatcher from '../appDispatcher';
import Constants from '../constants';

let PlayerActions = {

  setName (name) {
    AppDispatcher.dispatch({
      actionType: Constants.ACTIONS.PLAYER.SET_NAME,
      name: name
    });
  },

  setClass (classType) {
    AppDispatcher.dispatch({

    });

  }

};

module.exports = PlayerActions;
