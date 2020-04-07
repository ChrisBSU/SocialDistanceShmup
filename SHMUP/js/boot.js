var bootState = {

    init: function () {

        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
    },

    preload: function () {
        this.load.image('preloaderBackground', 'assets/LoadCraft-01.png');
        this.load.image('preloaderBar', 'assets/LoadingBar.png');
    },

    create: function () {
        this.state.start('load');
    }
};
