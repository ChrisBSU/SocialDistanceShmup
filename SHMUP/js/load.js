var complete = sessionStorage.getItem("complete");
this.background = null;
this.preloadBar = null;

this.ready = false;

var loadState = {

    preload: function () {

        this.stage.backgroundColor = "#1fbdd0";
        this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 50, 'preloaderBackground');
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 50, 'preloaderBar');
        this.background.anchor.setTo(0.5, 0.5);
        this.preloadBar.anchor.setTo(0.5, 0.5);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        this.load.audio('music', ['assets/Shooter_Theme_4.mp3']);
        this.load.audio('blast', ['assets/BLASTER.wav']);
        this.load.audio('enemysound', ['assets/POP.wav']);
        this.load.audio('gemsound', ['assets/PUZZLE.wav']);
        this.load.audio('beep', ['assets/LASER.wav']);
        this.load.audio('laser', ['assets/LASERPICK.wav']);
        this.load.image('sky', 'assets/White1.png');
        this.load.image('mount2', 'assets/Mount2.png');
        this.load.image('mount1', 'assets/Mount1.png');
        this.load.image('sun', 'assets/Sun1.png');
		this.load.image('win', 'assets/Win1-01.png');
        this.load.image('ground', 'assets/Ground1.png');
        this.load.image('clouds1', 'assets/CloudsOne-01.png');
        this.load.image('tree1', 'assets/Tree1.png');
        this.load.image('star', 'assets/Star1.png');
        this.load.image('gem', 'assets/RedGem1.png');
        this.load.image('bullet', 'assets/Bullet1.png');
        this.load.image('laser', 'assets/Laser1.png');
        this.load.image('title', 'assets/Title2-01.png');        
        this.load.image('play', 'assets/PlayButton1.png');        
        this.load.image('back', 'assets/BackButton1.png');
        this.load.image('click', 'assets/ClickFire1.png');        
        this.load.image('spark1', 'assets/BulletPart1.png');
        this.load.image('spark2', 'assets/BulletPart2.png');
        this.load.image('spark3', 'assets/BulletPart3.png');
        this.load.image('spark4', 'assets/BulletPart4.png');
        this.load.image('spark5', 'assets/BulletPart4.png');
        this.load.image('enemyBullet2', 'assets/Bullet2.png');
        this.load.image('enemyBullet3', 'assets/Bullet2.png');
        this.load.spritesheet('plane', 'assets/SpaceFighter-01.png', 256, 256);
        this.load.spritesheet('enemy', 'assets/Enemy1.png', 256, 256);
        this.load.spritesheet('enemy2', 'assets/Enemy2.png', 512, 512);
        this.load.spritesheet('blast', 'assets/Explosion1.png', 256, 256);
        this.load.spritesheet('pickup', 'assets/LaserPickup1.png', 128, 128);
        this.load.spritesheet('enemyBullet', 'assets/ebulletsheet1.png', 32, 32);
        this.load.spritesheet('pause', 'assets/PauseButton1.png', 128, 128);      

    },

    create: function () {
        //if (complete == "true") {
        //    this.state.start('menu');
        //} else {
            this.state.start('play');
        //}
        
    }
};
