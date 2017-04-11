export class GameMe {
    player: Phaser.Sprite;
    game: Phaser.Game;
    cursors: Phaser.CursorKeys;
    constructor(game) {
        this.game = game;
    }
    create(cursors) {
        this.cursors = cursors;
        let icoMeW = 64;
        let scalMe = this.game.width * 0.1 / icoMeW;
        let offsetMe = icoMeW / 2 * scalMe;
        this.player = this.game.add.sprite(this.game.world.centerX - offsetMe, this.game.world.centerY - offsetMe, "icoMe");
        this.player.scale.x = scalMe;
        this.player.scale.y = scalMe;
        this.game.camera.follow(this.player);
    }

    update() {
        let v = 2;
        this.game.world.setBounds(this.player.position.x - this.game.width / 2, this.player.position.y - this.game.height / 2, this.game.width , this.game.height );
        if (this.cursors.left.isDown) {
            this.player.position.x -= v;
        }
        else if (this.cursors.right.isDown) {
            this.player.position.x += v;
        }

        if (this.cursors.up.isDown) {
            this.player.position.y -= v;
        }
        else if (this.cursors.down.isDown) {
            this.player.position.y += v;
        }

    }
}