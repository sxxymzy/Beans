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
    this.bgTileSprite.tileScale.x = scaleBg;
    this.bgTileSprite.tileScale.y = scaleBg;
  }

  update() {
    if (this.cursors.left.isDown) {
      this.bgTileSprite.tilePosition.x += 8;
    }
    else if (this.cursors.right.isDown) {
      this.bgTileSprite.tilePosition.x -= 8;
    }

    if (this.cursors.up.isDown) {
      this.bgTileSprite.tilePosition.y += 8;
    }
    else if (this.cursors.down.isDown) {
      this.bgTileSprite.tilePosition.y -= 8;
    }
  }

}
