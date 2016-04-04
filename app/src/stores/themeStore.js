import _ from 'underscore';
import EventEmitter from 'eventemitter2';

import AppDispatcher from '../appDispatcher';
import Constants from '../constants';

let theme = 'brown';
let set = (t) => theme = t;

let CHANGE_EVENT = 'change';

let ThemeStore = _.extend({}, EventEmitter.prototype, {

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  get: () => theme,

  dispatcherCb: function (action) {
    switch(action.actionType) {
      case Constants.ACTIONS.THEMES.SET:
        set(action.theme);
        ThemeStore.emitChange();
        break;
    }
  }

});

ThemeStore.dispatchToken = AppDispatcher.register(ThemeStore.dispatcherCb);

module.exports = ThemeStore;
