// TODO, maybe break into separate files, can check uniqueness of keys and err if clobbering

module.exports = {
  ACTIONS: {
    PLAYER: {
      SET_NAME: 'playerSetName'
    },

    THEMES: {
      SET: 'themeSet'
    }
  },

  NEW_GAME_STEPS: {
    NAME: 'newGameStepsName',
    PLAYER_CLASS: 'newGameStepsPlayerClass'
  }
};
