let storage = window.localStorage;

let applySavedTheme = () => {
  let savedTheme = storage.getItem('theme');
  $('body').addClass(savedTheme || 'brown');
};

let loadGameSaves = () => {
  let gameSaves = storage.getItem('gameSaves');
  if (gameSaves) {
    console.log(gameSaves);
  }
};

let Bootstrapper = {
  bootstrap() {
    applySavedTheme();
    loadGameSaves();
  }
};

module.exports = Bootstrapper;
