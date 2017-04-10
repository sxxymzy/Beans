import { GameMe } from './game-me';
import { GameBeans } from './game-beans';
import { GameBg } from './game-bg';

export class GameCore {
  game: Phaser.Game;
  cursors: Phaser.CursorKeys;

  gameBg: GameBg;
  gameBeans: GameBeans;
  gameMe: GameMe;

  constructor() {
    this.game = new Phaser.Game(
      "100", "100",
      Phaser.AUTO,
      'game-board',
      {
        preload: this.preload,
        create: this.create,
        update: this.update,
        render: this.render,
      },
      false);
  }

  preload() {
    // these can't in constructor! because this has been changed
    this.gameBg = new GameBg(this.game);
    this.gameBeans = new GameBeans();
    this.gameMe = new GameMe(this.game);
    this.game.load.image("bgTileImage", "assets/tile-grid.png");
    this.game.load.image("icoMe", "assets/sprites/me.ico");
    this.game.load.image("bean", "assets/sprites/bean.png");
  }

  create() {
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.gameBg.create(this.cursors);
    this.gameMe.create();
  }
  update() {
    this.gameBg.update();
  }
  render() {
  }
}
