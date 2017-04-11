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
    this.gameBeans = new GameBeans(this.game);
    this.gameMe = new GameMe(this.game);
    this.game.load.image("bgTileImage", "assets/tile-grid.png");
    this.game.load.image("icoMe", "assets/sprites/me.ico");
    this.game.load.image("bean", "assets/sprites/bean.png");
  }

  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.gameBg.create(this.cursors);
    this.gameBeans.create();
    this.gameMe.create(this.cursors);
    this.game.physics.arcade.enable([this.gameMe.player, this.gameBeans.beansGroup]);
  }
  update() {
    this.gameBeans.update();
    this.gameMe.update();
    this.gameBg.update();
    this.game.physics.arcade.overlap(this.gameMe.player, this.gameBeans.beansGroup, function (me, bean) {
      bean.kill();
    }, null, this);
  }
  render() {
    this.game.debug.cameraInfo(this.game.camera, 32, 32);
    // this.game.debug.spriteCoords(this.gameMe.player, 32, 500);
    // this.game.debug.

  }
}
