var game = new Phaser.Game("100%", "100%", Phaser.CANVAS, 'shmup');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);

game.state.start('boot');