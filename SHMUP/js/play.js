var player;
var enemies;
var enemies2;
var explosions;
var explosions2;
var platforms;
var cursors;
var bullet;
var enemyBullet;
var enemyBullet2;
var enemyBullet3;
var firingTimer = 0;
var firingTimer2 = 0;
var livingEnemies = [];
var livingEnemies2 = [];
var spriteBottomLeft;
var spriteTopLeft;
var stars;
var gems;
var clouds1;
var ground;
var score = 0;
var scoreText;
var text = null;
var jump = 0;
var jumpbool = false;
var mount1;
var mount2;
var tree3;
var tree4;
var sun;
var bg;
var shooter;
var shooter2;
var spriteMiddle;
var subtitle;
var flag;
var flag2;
var flag3;
var flag4;
var flag5;
var flag6;
var laser;
var laserTap;
var pauseButton;
var playButton;
var click;
var tween;
var tween2;
var tween3;
var tween4;
var tween5;
var tween6;
var tween7;
var tween8;
var tween9;
var tween10;
var tween11;
var music;
var blast;
var beep;
var gemsound;
var enemysound;
var laserpick;
var winner;
//var scaleRatio = window.devicePixelRatio;

var playState = {

    create: function () {

        this.spriteMiddle = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 100, 'title');
        this.spriteMiddle.anchor.set(0.5, 0.5);

        sun = game.add.sprite(game.width + 400, 200, 'sun');
        game.physics.arcade.enable(sun);
        sun.scale.setTo(0.8, 0.8);
        sun.anchor.setTo(1, 0);

        mount2 = game.add.sprite(3500, game.world.height - 690, 'mount2');
        game.physics.arcade.enable(mount2);

        mount1 = game.add.sprite(3800, game.world.height - 690, 'mount1');
        game.physics.arcade.enable(mount1);
		
        mount3 = game.add.sprite(11800, game.world.height - 690, 'mount2');
        game.physics.arcade.enable(mount3);

        this.tree1 = this.add.sprite(this.game.width / 4.1, game.world.height - 180, 'tree1');
        this.tree1.anchor.set(0, 1);
        game.physics.arcade.enable(this.tree1);

        this.tree2 = this.add.sprite(this.game.width / 1.7, game.world.height - 180, 'tree1');
        this.tree2.anchor.set(0, 1);
        game.physics.arcade.enable(this.tree2);

        tree3 = game.add.sprite(5600, game.world.height - 180, 'tree1');
        game.physics.arcade.enable(tree3);

        tree4 = game.add.sprite(13000, game.world.height - 434, 'tree1');
        game.physics.arcade.enable(tree4);

        subtitle = game.add.sprite(this.game.world.centerX + 600, this.game.world.centerY - 1100, 'clouds1');
        subtitle.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(subtitle);

        exper = game.add.sprite(5800, game.world.height - 2300, 'clouds1');
        exper.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(exper);

        vgs = game.add.sprite(6600, game.world.height - 2300, 'clouds1');
        vgs.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(vgs);

        king = game.add.sprite(7200, game.world.height - 2300, 'clouds1');
        king.anchor.setTo(0.5, 0.5);
        king.scale.setTo(0.6, 0.6);
        game.physics.arcade.enable(king);

        smash = game.add.sprite(9000, game.world.height - 2300, 'clouds1');
        smash.anchor.setTo(0.5, 0.5);
        smash.scale.setTo(0.6, 0.6);
        game.physics.arcade.enable(smash);

        web = game.add.sprite(10860, game.world.height - 2300, 'clouds1');
        web.scale.setTo(0.99, 0.99);
        web.anchor.setTo(0.5, 0.5);
        game.physics.arcade.enable(web);

        this.spriteBottomLeft = this.add.tileSprite(-32, this.game.height + 64, this.game.width + 64, 256, 'ground');
        this.spriteBottomLeft.anchor.set(0, 1);
        this.spriteBottomLeft.autoScroll(-150, 0, 300, 0.1);

        this.playButton = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 150, 'play');
        this.playButton.anchor.set(0.5, 0.5);

        click = game.add.sprite(this.game.world.centerX, this.game.world.centerY + 300, 'click');
        click.anchor.setTo(0.5, 0.5);
        //click.scale.setTo(0.9, 0.9);
        game.physics.arcade.enable(click);
				
        pauseButton = game.add.button(this.game.width - 18, 18, 'pause', actionOnClick, this, 1, 0);
        pauseButton.scale.setTo(0.8, 0.8);
        pauseButton.anchor.set(1, 0);

        pauseButton.fixedToCamera = true;

        pauseButton.onInputOver.add(over, this);
        pauseButton.onInputOut.add(out, this);

        player = game.add.sprite(240, game.world.height - 620, 'plane');
        player.scale.setTo(0.6, 0.6);

        //WEAPONS//////////////
        weapon = game.add.weapon(80, 'bullet');
        weapon.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        weapon.bulletAngleOffset = 0;
        weapon.bulletSpeed = 1100;
        weapon.fireRate = 110;
        weapon.bulletAngleVariance = 4;
        weapon.trackSprite(player, 100, 16, true);

        weapon2 = game.add.weapon(160, 'enemyBullet');
        weapon2.addBulletAnimation('shot', [0, 1, 2, 3], 16, true);
        weapon2.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        weapon2.bulletAngleOffset = 0;
        weapon2.bulletSpeed = -500;
        weapon2.fireRate = 5;
        weapon2.bulletAngleVariance = 12;
        weapon2.trackSprite(shooter, 0, 0, true);

        weapon3 = game.add.weapon(200, 'laser');
        weapon3.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        weapon3.bulletAngleOffset = 0;
        weapon3.bulletSpeed = 2100;
        weapon3.fireRate = 6;
        weapon3.bulletAngleVariance = 0;
        weapon3.trackSprite(player, 84, 16, true);

        weapon4 = game.add.weapon(160, 'enemyBullet2');
        weapon4.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        weapon4.bulletAngleOffset = 180;
        weapon4.bulletSpeed = -800;
        weapon4.fireRate = 50;
        weapon4.bulletAngleVariance = 1;
        weapon4.trackSprite(shooter2, 0, 0, true);

        weapon5 = game.add.weapon(160, 'enemyBullet3');
        weapon5.bulletKillType = Phaser.Weapon.KILL_CAMERA_BOUNDS;
        weapon5.bulletAngleOffset = 180;
        weapon5.bulletSpeed = -800;
        weapon5.fireRate = 50;
        weapon5.bulletAngleVariance = 1;
        weapon5.trackSprite(shooter2, 0, 0, true);
    
        spark = game.add.weapon(8, 'spark1');
        spark.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        spark.trackSprite(player, 100, 16, true);
        spark.bulletAngleOffset = 0;
        spark.bulletSpeed = 1;
        spark.fireRate = 2;
        spark.bulletAngleVariance = 15;
    
        spark2 = game.add.weapon(6, 'spark2');
        spark2.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        spark2.trackSprite(player, 100, 16, true);
        spark2.bulletAngleOffset = 0;
        spark2.bulletSpeed = 1;
        spark2.fireRate = 3;
        spark2.bulletAngleVariance = 6;

        spark3 = game.add.weapon(6, 'spark3');
        spark3.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        spark3.trackSprite(player, 100, 16, true);
        spark3.bulletAngleOffset = 0;
        spark3.bulletSpeed = 1;
        spark3.fireRate = 4;
        spark3.bulletAngleVariance = 14;

        spark4 = game.add.weapon(6, 'spark4');
        spark4.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        spark4.trackSprite(shooter2, -90, 0, true);
        spark4.bulletAngleOffset = 180;
        spark4.bulletSpeed = 1;
        spark4.fireRate = 4;
        spark4.bulletAngleVariance = 6;

        spark5 = game.add.weapon(6, 'spark5');
        spark5.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
        spark5.trackSprite(shooter2, -90, 0, true);
        spark5.bulletAngleOffset = 180;
        spark5.bulletSpeed = 1;
        spark5.fireRate = 4;
        spark5.bulletAngleVariance = 6;

        bullet = weapon.bullets;
        laser = weapon3.bullets;

        enemyBullet = weapon2.bullets;
        enemyBullet2 = weapon4.bullets;
        enemyBullet3 = weapon5.bullets;
        enemySpark = spark4.bullets;
        enemySpark2 = spark5.bullets;

        //Player////////////
        game.physics.arcade.enable(player);
        player.anchor.setTo(0.5, 0.5);
        player.body.setCircle(32, 100, 100);
        player.body.collideWorldBounds = true;
        player.animations.add('fly', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12, true);
        player.animations.play('fly');
        player.SPEED = 400;
        player.TURN_RATE = 3;

        //LaserPickup////////
        laserPickup = game.add.sprite(7600, game.world.height - 400, 'pickup');
        laserPickup.animations.add('spin', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 24, true);
        laserPickup.animations.play('spin');
        game.physics.arcade.enable(laserPickup);
        laserPickup.scale.setTo(0.8, 0.8);
        laserPickup.anchor.setTo(0.5, 0.5);
        laserPickup.body.setCircle(32, 64, 64);
        laserPickup.body.velocity.x = -120;
        laserPickup.SPEED = 1200;
        
        //Enemy///////////
        enemies = game.add.group();
        enemies.enableBody = true;
        enemies.physicsBodyType = Phaser.Physics.ARCADE;
    
        createEnemies();

        enemies2 = game.add.group();
        enemies2.enableBody = true;
        enemies2.physicsBodyType = Phaser.Physics.ARCADE;

        createEnemies2();

        //EXPLOSIONS////////
        explosions = game.add.group();
        explosions.createMultiple(30, 'blast');
        explosions.forEach(setupEnemy, this);

        explosions2 = game.add.group();
        explosions2.createMultiple(30, 'blast');
        explosions2.forEach(setupEnemy2, this);

        //Stars///////////
        stars = game.add.group();
        stars.enableBody = true;

        gems = game.add.group();
        gems.enableBody = true;

        //CAMERA//////////
        //game.camera.follow(player);//, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
        //game.camera.deadzone = new Phaser.Rectangle(600, 300, 300, 300);

        for (var i = 0; i < 8; i++)
        {
            var star = stars.create(i * 1500, 100, 'star');
            star.body.setCircle(32, 8, 8);
            star.body.velocity.x = -125;
        }

        stars.x = 2300;
        stars.y = 340;

        for (var j = 0; j < 12; j++) {
            var gem = gems.create(j * 1700, 90, 'gem');
            gem.body.setCircle(32, 8, 8);
            gem.body.velocity.x = -120;
        }

        gems.x = 1900;
        gems.y = 380;

        stars.SPEED = 1200;
        gems.SPEED = 1400;
        enemies2.SPEED = 3500;

        laserBounceTween();
        starBounceTween();
        gemBounceTween();
        en2BounceTween();

        tween1 = game.add.tween(this.spriteMiddle.scale).to({ x: 0, y: 0 }, 700, Phaser.Easing.Elastic.In, true);
        tween2 = game.add.tween(this.playButton).to({ y: (game.world.height - 360) - (this.playButton.height - 640) }, 600, Phaser.Easing.Elastic.In, true);
        tween3 = game.add.tween(subtitle).to({ y: (game.world.centerY - 1200) - (subtitle.height - 1050) }, 1800, Phaser.Easing.Elastic.InOut, true);
        //tween2.onComplete.add(ExperienceTween, this);

        //SCORE/////////////
        scoreText = game.add.text(50, 25, 'SCORE: 0', { fontSize: '44px', fill: '#666666', spacing: '5' });
        scoreText.font = 'Luckiest Guy';
        scoreText.padding.set(10, 10);
        scoreText.fixedToCamera = true;
        scoreText.stroke = '#FFFFFF';
        scoreText.strokeThickness = 2;
        scoreText.setShadow(3, 3, 'rgba(0,0,0,0.3)', 1);

        //MUSIC/////////////
        music = game.add.audio('music');
        music.volume = 0.4;
        music.play();
        music.loopFull();
        blast = game.add.audio('blast');
        blast.volume = 0.2;
        beep = game.add.audio('beep');
        beep.volume = 0.5;
        gemsound = game.add.audio('gemsound');
        gemsound.volume = 0.2;
        enemysound = game.add.audio('enemysound');
        enemysound.volume = 0.3;
        laserpick = game.add.audio('laser');
        laserpick.volume = 0.2;

        game.paused = true;

        //UNPAUSE//////////////
        if (game.paused) {
            game.input.onDown.add(unpause, self);
            pauseButton.inputEnabled = true;
        }

        //ENEMIES//////////////
        function createEnemies() {

            for (var y = 0; y < 3; y++) {
                for (var x = 0; x < 27; x++) {
                    var enemy = enemies.create(x * 1200, y * game.height/3, 'enemy');
                    enemy.anchor.setTo(0.5, 0.5);
                    enemy.scale.setTo(0.6, 0.6);
                    enemy.body.setCircle(44, 100, 140);
                    enemy.animations.add('float', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 17, true);
                    enemy.play('float');
                    enemy.body.velocity.x = game.rnd.integerInRange(-220, -280);
                    enemy.body.velocity.y = game.rnd.integerInRange(-1, 1);

                }
            }
            enemies.x = 3400;
            enemies.y = 200;
        }

        function createEnemies2() {

            for (var y = 0; y < 1; y++) {
                for (var x = 0; x < 16; x++) {
                    var enemy2 = enemies2.create(x * 2200, y * 40, 'enemy2');
                    enemy2.anchor.setTo(0.5, 0.5);
                    enemy2.scale.setTo(0.5, 0.5);
                    enemy2.body.setCircle(128, 150, 150);
                    enemy2.animations.add('enemyfly', [0, 1, 2, 3], 12, true);
                    enemy2.animations.play('enemyfly');
                    enemy2.body.velocity.x = game.rnd.integerInRange(-190, -220);
                    enemy2.body.velocity.y = game.rnd.integerInRange(-2, 2);

                }
            }
            enemies2.x = 5000;
            enemies2.y = 250;
        }

        function setupEnemy(enemy) {
            enemy.anchor.x = 0.4;
            enemy.anchor.y = 0.4;
            enemy.animations.add('blast', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        }

        function setupEnemy2(enemy2) {
            enemy2.anchor.x = 0.1;
            enemy2.anchor.y = 0.1;
            enemy2.animations.add('blast', [0, 1, 2, 3, 4, 5, 6, 7], 12, true);
        }

        function onTap(pointer, doubleTap) {
            if (tree4.x >= game.world.width / 2) {
                if (laserTap == true) {
                    weapon3.fire();
                    spark3.fire();
                    if (!beep.isPlaying) {
                        beep.play();
                    }
                }
                else {
                    weapon.fire();
                    spark.fire();
                    spark2.fire();
                    if (!blast.isPlaying) {
                        blast.play();
                    }
                }
            }
        }

        this.tree1.body.velocity.x = -90;
        this.tree2.body.velocity.x = -90;
        tree3.body.velocity.x = -90;
        tree4.body.velocity.x = -91;        
        mount1.body.velocity.x = -87;
        mount2.body.velocity.x = -82;
        mount3.body.velocity.x = -94;
        sun.body.velocity.x = -40;
        subtitle.body.velocity.x = -90;
        exper.body.velocity.x = -90;
        vgs.body.velocity.x = -90;
        king.body.velocity.x = -90;
        smash.body.velocity.x = -90;
        web.body.velocity.x = -90;        
        click.body.velocity.x = -110;

        //INPUT////////////////
        game.input.mouse.capture = true;
        game.input.onTap.add(onTap, this);
        //cursors = game.input.keyboard.createCursorKeys();
        //fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    },

    update: function(game){

        game.physics.arcade.collide(player, platforms);
        game.physics.arcade.collide(stars, platforms);
        game.physics.arcade.collide(player, enemies, collisionthis, null, this);
        game.physics.arcade.collide(enemies, enemies, collisionthis, null, this);
        game.physics.arcade.overlap(bullet, enemies, collisionHandler, null, this);
        game.physics.arcade.overlap(laser, enemies, collisionHandler, null, this);
        game.physics.arcade.overlap(bullet, enemies2, collisionHandler2, null, this);
        game.physics.arcade.overlap(laser, enemies2, collisionHandler, null, this);
        game.physics.arcade.overlap(enemyBullet, player, enemyStrike, null, this);
        game.physics.arcade.overlap(enemyBullet2, player, enemyStrike2, null, this);
        game.physics.arcade.overlap(player, stars, collectStar, null, this);
        game.physics.arcade.overlap(player, gems, collectGem, null, this);
        game.physics.arcade.overlap(player, laserPickup, collectLaser, null, this);
    
        //PLAYER SHOOTING///////////////////////////
        if (game.input.activePointer.leftButton.isDown && tree4.x >= game.world.width / 2) {
            if (laserTap == true) {
                weapon3.fire();
                spark3.fire();
                if (!beep.isPlaying) {
                    beep.play();
                }
            }
            else {
                weapon.fire();
                spark.fire();
                spark2.fire();
                if (!blast.isPlaying) {
                    blast.play();
                }
            }
        }

        //PLAYER MOVEMENT/////////////////////////////
        var targetAngle = game.math.angleBetween(
            player.x, player.y,
            game.input.activePointer.x, game.input.activePointer.y
        );

        targetAngle += game.math.degToRad(player.rotation);
  
        if (player.rotation !== targetAngle) {
        
            var delta = targetAngle - player.rotation;

            if (delta > Math.PI) delta -= Math.PI * 2;
            if (delta < -Math.PI) delta += Math.PI * 2;

            if (delta > 0) {
                player.angle += player.TURN_RATE;
            } else {
                player.angle -= player.TURN_RATE;
            }

            if (Math.abs(delta) < this.game.math.degToRad(player.TURN_RATE)) {
                player.rotation = targetAngle;
            }
        }
    
        player.body.velocity.x = Math.cos(player.rotation) * player.SPEED;
        player.body.velocity.y = Math.sin(player.rotation) * player.SPEED;

        if (tree4.x <= game.world.width / 2) {
            
            sessionStorage.setItem('complete', 'true');
            contactStop();
            this.state.start('menu');
        }

        if (!game.paused) {
           
            pauseButton.inputEnabled = true;
        }
        
        //ENEMY SHOOTING//////////////////////////////
        if (game.time.now > firingTimer) {
            enemyFires();
        }

        if (game.time.now > firingTimer2) {
            enemyFires2();
        }
    },
};

//ENEMY ENEMY COLLISON////////////////////////
function collisionthis(enemy, enemy) {
    enemy.body.velocity.x = game.rnd.integerInRange(-190, -220);
}

function contactStop(game) {
    player.animations.stop();
    player.body.velocity = 0;
    player.angle = 0;
    player.frame = 0;
    player.alpha = 0;

    beep.volume = 0;
    blast.volume = 0;
}

function enemyStrike(player, enemyBullet) {

    enemyBullet.kill();

    game.camera.shake(0.016, 110);
    if (score > 0) {
        score -= 1;
        scoreText.text = 'SCORE: ' + score;
    } else {
        score = 0;
        scoreText.text = 'SCORE: ' + score;
    }
}

function enemyStrike2(player, enemyBullet2) {

    enemyBullet2.kill();

    game.camera.shake(0.016, 110);
    if (score > 0) {
        score -= 1;
        scoreText.text = 'SCORE: ' + score;
    } else {
        score = 0;
        scoreText.text = 'SCORE: ' + score;
    }
}

function collisionHandler(bullet, enemy) {

    bullet.kill();
    enemy.kill();

    score += 10;
    scoreText.text = 'SCORE: ' + score;

    if (!enemysound.isPlaying) {
        enemysound.play();
    }

    var explosion = explosions.getFirstExists(false);
    explosion.reset(enemy.body.x, enemy.body.y);
    explosion.play('blast', 30, false, true);
}

function collisionHandler2(bullet, enemy2) {

    bullet.kill();
    enemy2.kill();

    score += 15;
    scoreText.text = 'SCORE: ' + score;

    if (!enemysound.isPlaying) {
        enemysound.play();
    }

    var explosion = explosions.getFirstExists(false);
    explosion.reset(enemy2.body.x, enemy2.body.y);
    explosion.play('blast', 30, false, true);
}

function collectLaser(player, laserPickup) {
    laserPickup.kill();
    laserTap = true;

    if (!laserpick.isPlaying) {
        laserpick.play();
    }
}

function enemyFires() {
    livingEnemies.length = 0;
    enemies.forEachAlive(function (enemy) {
        livingEnemies.push(enemy);
    });

    if (enemyBullet && livingEnemies.length > 0) {
        var random = game.rnd.integerInRange(0, livingEnemies.length - 1);
        var shooter = livingEnemies[random];
        weapon2.trackSprite(shooter, 0, 0, true);
        weapon2.fire();
        firingTimer = game.time.now + 10;
    }
}

function enemyFires2() {
    livingEnemies2.length = 0;
    enemies2.forEachAlive(function (enemy2) {
        livingEnemies2.push(enemy2);
    });

    if (enemyBullet2 && livingEnemies2.length > 0) {
        var random2 = game.rnd.integerInRange(0, livingEnemies2.length - 1);
        var shooter2 = livingEnemies2[random2];

        weapon4.trackSprite(shooter2, -139, 88, true);
        weapon4.fire();
        weapon5.trackSprite(shooter2, -34, 110, true);
        weapon5.fire();
        spark4.trackSprite(shooter2, -137, 88, true);
        spark4.fire();
        spark5.trackSprite(shooter2, -32, 110, true);
        spark5.fire();
        firingTimer2 = game.time.now + 0;
    }
}

function starBounceTween() {
    var wobble = game.add.tween(stars);
    wobble.to(
      { y: (game.world.height - 380) - stars.height - 440 },
       stars.SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
     Number.POSITIVE_INFINITY, true
 );
    wobble.start();
}

function gemBounceTween() {

    var gemgo = game.add.tween(gems);
    gemgo.to(
      { y: (game.world.height - 800) - (gems.height - 5) },
       gems.SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
     Number.POSITIVE_INFINITY, true
 );
    gemgo.start();
}

function en2BounceTween() {

    var en2go = game.add.tween(enemies2);
    en2go.to(
      { y: (game.world.height - 520) - (enemies2.height - 400) },
       enemies2.SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
     Number.POSITIVE_INFINITY, true
 );
    en2go.start();
}

function laserBounceTween() {

    var lasergo = game.add.tween(laserPickup);
    lasergo.to(
      { y: (game.world.height - 800) - (laserPickup.height - 50) },
       laserPickup.SPEED, Phaser.Easing.Sinusoidal.InOut, true, 0,
     Number.POSITIVE_INFINITY, true
 );
    lasergo.start();
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick() {
    //if (game.paused) {
    // game.paused = false;
    //} else {
    game.paused = true;
    //}

    pauseButton.inputEnabled = false;
}

/*
function menuOnClick() {    
    this.state.start('menu');    
}
*/

function unpause(event) {
    game.paused = false;
}

/*
function ExperienceTween() {
    tween4 = game.add.tween(exper).to({ y: (game.world.height - 2100) - (exper.height - 1500) }, 1400, Phaser.Easing.Elastic.InOut, true, 70000);    
}
*/

function collectStar(player, star) {
    star.kill();
    score += 5;
    scoreText.text = 'SCORE: ' + score;

    if (!gemsound.isPlaying) {
        gemsound.play();
    }
}

function collectGem(player, gem) {
    gem.kill();
    score += 10;
    scoreText.text = 'SCORE: ' + score;

    if (!gemsound.isPlaying) {
        gemsound.play();
    }
}
 
