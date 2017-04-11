export class GameBeans {

  game: Phaser.Game;
  beansGroup: Phaser.Group;
  constructor(game) {
    this.game = game;
  }
  create() {
    this.game.physics.setBoundsToWorld();
    this.beansGroup = this.game.add.group()
    this.beansGroup.enableBody = true;
    this.addBeans(50);
  }

  update() {
    if (this.beansGroup.countLiving() < 40) {
      this.addBeans(10);
    }
  }

  addBeans(quantity) {
    for (let i = 0; i < quantity; i++) {
      let x = this.game.world.bounds.left + Math.random() * (this.game.world.bounds.right - this.game.world.bounds.left);
      let y = this.game.world.bounds.top + Math.random() * (this.game.world.bounds.bottom - this.game.world.bounds.top);
      let bean: Phaser.Sprite = this.beansGroup.create(x, y, "bean");
      bean.checkWorldBounds = true;
      bean.events.onOutOfBounds.add(bean => bean.kill());
    }
  }
}
