let storage = window.localStorage;

let loadGameSaves = () => {
  let gameSaves = storage.getItem('gameSaves');
  if (gameSaves) {
    console.log(gameSaves);
  }
};

let Bootstrapper = {
  bootstrap() {
    loadGameSaves();
  }
};

module.exports = Bootstrapper;
