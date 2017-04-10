export class GameMe {
    icoMe: Phaser.Sprite;
    game: Phaser.Game;
    constructor(game) {
        this.game = game;
    }
    create() {
        let icoMeW = 64;
        let scalMe = this.game.width * 0.1 / icoMeW;
        let offsetMe = icoMeW / 2 * scalMe;
        this.icoMe = this.game.add.sprite(this.game.width / 2 - offsetMe, this.game.height / 2 - offsetMe, "icoMe");
        this.icoMe.scale.x = scalMe;
        this.icoMe.scale.y = scalMe;
    }
}