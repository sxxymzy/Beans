import { Component } from '@angular/core';

/**
 * Generated class for the MapBoard component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'map-board',
  templateUrl: 'map-board.html'
})
export class MapBoard {

  game: Phaser.Game;
  cursors: Phaser.CursorKeys;
  bgTileSprite: Phaser.TileSprite;
  icoMe: Phaser.Sprite;
  constructor() {
    this.game = new Phaser.Game(
      "100", "100",
      Phaser.AUTO,
      'game-board',
      { preload: this.preload, create: this.create, update: this.update, render: this.render },
      false);
  }

  preload() {
    this.game.load.image("bgTileImage", "assets/tile-grid.png");
    this.game.load.image("icoMe", "assets/sprites/me.ico");
  }

  create() {
    let icoMeW = 64;
    let tileW = 44;
    this.bgTileSprite = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, "bgTileImage");
    let scalMe = this.game.width * 0.1 / icoMeW;
    let offsetMe = icoMeW / 2 * scalMe;
    this.icoMe = this.game.add.sprite(this.game.width / 2 - offsetMe, this.game.height / 2 - offsetMe, "icoMe");

    this.icoMe.scale.x = scalMe;
    this.icoMe.scale.y = scalMe;
    console.log(scalMe, offsetMe);

    let scaleBg = this.game.width / 15 / tileW; // 15 grid each row, 44 is tile image width
    this.bgTileSprite.tileScale.x = scaleBg;
    this.bgTileSprite.tileScale.y = scaleBg;

    this.cursors = this.game.input.keyboard.createCursorKeys();
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
  render() {
  }

}
