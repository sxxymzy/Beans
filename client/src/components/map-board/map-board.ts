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
  constructor() {
    this.game = new Phaser.Game(
      "100", "100",
      Phaser.AUTO,
      'game-board',
      { preload: this.preload, create: this.create },
      true);
  }


  preload() {
    this.game.load.image('logo', 'assets/sprites/me.ico');
  }

  create() {
    var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

}
