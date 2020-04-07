var menuState = {

    create: function () {

            this.tree1 = this.add.sprite(this.game.width / 2.0, game.world.height - 180, 'tree1');
            this.tree1.anchor.set(0, 1);
		
			this.winner = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 140, 'win');
			this.winner.anchor.set(0.5, 0.5);

            this.menuground = this.add.tileSprite(-32, this.game.height + 64, this.game.width + 64, 256, 'ground');
            this.menuground.anchor.set(0, 1);

            this.backButton = game.add.button(64, 64, 'back', backClick, this, 1, 0);
            this.backButton.scale.setTo(0.8, 0.8);
            this.backButton.anchor.set(0.5, 0.5);

            //var c = document.getElementById("highscore");
            //c.style.display = "block";
            
        },

        update: function () {
        }

};

function backClick() {
    music.destroy();
    //var c = document.getElementById("highscore");
    //c.style.display = "none";
    this.state.start('boot');
}


    

