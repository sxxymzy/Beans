import { GameCore } from './../../game/game-core';
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

  gameCore = new GameCore();
  constructor() {

  }

}
