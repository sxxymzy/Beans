export class GameBg {
  bgTileSprite: Phaser.TileSprite;
  game: Phaser.Game;
  cursors: Phaser.CursorKeys;
  constructor(game) {
    this.game = game;
  }

  create(cursors) {
    this.cursors = cursors;
    let tileW = 44;
    let scaleBg = this.game.width / 15 / tileW; // 15 grid each row, 44 is tile image width
    this.bgTileSprite = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "bgTileImage");
    // this.bgTileSprite.resizeFrame()
    this.bgTileSprite.tileScale.x = scaleBg;
    this.bgTileSprite.tileScale.y = scaleBg;
  }

  update() {
    let v = 2;
    this.bgTileSprite.tilePosition.y = -this.game.camera.view.y;
    this.bgTileSprite.tilePosition.x = -this.game.camera.view.x;
    this.bgTileSprite.position.x = this.game.camera.view.x;
    this.bgTileSprite.position.y = this.game.camera.view.y;
    if (this.cursors.left.isDown) {
      this.bgTileSprite.position.x = this.game.camera.view.x - v;
    }
    else if (this.cursors.right.isDown) {
      this.bgTileSprite.position.x = this.game.camera.view.x + v;
    }
    if (this.cursors.up.isDown) {
      this.bgTileSprite.position.y = this.game.camera.view.y - v;
    }
    else if (this.cursors.down.isDown) {
      this.bgTileSprite.position.y = this.game.camera.view.y + v;
    }
  }

}
