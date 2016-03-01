import AppDispatcher from '../appDispatcher';
import Constants from '../constants';

let PlayerActions = {

  setName (name) {
    AppDispatcher.dispatch({
      actionType: Constants.ACTIONS.PLAYER.SET_NAME,
      name: name
    });
  }

};

module.exports = PlayerActions;
