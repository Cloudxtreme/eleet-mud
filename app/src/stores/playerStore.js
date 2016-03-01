import _ from 'underscore';
import EventEmitter from 'eventemitter2';

import AppDispatcher from '../appDispatcher';
import Constants from '../constants';

let name;
let setName = (n) => name = n;

let CHANGE_EVENT = 'change';

let PlayerStore = _.extend({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  getName: () => name,

  dispatcherCb: function (action) {
    switch(action.actionType) {
      case Constants.ACTIONS.PLAYER.SET_NAME:
        setName(action.name);
        PlayerStore.emitChange();
        console.log('action set name hit in store');
        break;
    }
  }

});

PlayerStore.dispatchToken = AppDispatcher.register(PlayerStore.dispatcherCb);

module.exports = PlayerStore;
