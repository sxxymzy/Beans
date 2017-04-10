export class GameBeans {

  game: Phaser.Game;
  cursors: Phaser.CursorKeys;
  beansGroup: Phaser.Group;
  constructor(game) {
    this.game = game;
  }
  create(cursors) {
    this.cursors = cursors;
    const quantity = 50;
    this.beansGroup = this.game.add.group()
    for (let i = 0; i < quantity; i++) {
      let x = Math.random() * this.game.width;
      let y = Math.random() * this.game.height;
      this.beansGroup.create(x, y, "bean");
    }
  }

  update() {
    let v = 2;
    if (this.cursors.left.isDown) {
      this.beansGroup.position.x += v;
    }
    else if (this.cursors.right.isDown) {
      this.beansGroup.position.x -= v;
    }
    if (this.cursors.up.isDown) {
      this.beansGroup.position.y += v;
    }
    else if (this.cursors.down.isDown) {
      this.beansGroup.position.y -= v;
    }

  }

}
