
var config = {
    type: Phaser.AUTO,  // Will automatically use WebGL if available, else falls back to Canvas
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',  // We'll be using Phaser's Arcade physics plugin
        arcade: {
            gravity: { y: 300 },  // This is the gravity value to be used in the game
            debug: true  // This lets you visualize the physics bodies if set to true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // This is where we'll load our game assets
    this.load.image('ground', 'assets/grass.png');
    this.load.image('player', 'assets/alienGreen_walk1.png');
    this.load.image('box', 'assets/boxCoin_disabled.png');
    this.load.image('planet1', 'assets/planet01.png');
    this.load.image('planet9', 'assets/planet09.png');
    this.load.image('planet4', 'assets/129674594.png');
}

let player;
let platforms;
let planet1;
let planet9;
let planet4;

// planet1.setDisplaySize(100, 100);
// planet1.refreshBody();



function create() {
   // Set world bounds
    this.physics.world.setBounds(0, 0, 4000, 2000);  // The second parameter is the world height
  

    platforms = this.physics.add.staticGroup();  // Create a group for platforms
    
    // Add ground platforms
    platforms.create(75, 600, 'planet1').setDisplaySize(150, 150).refreshBody().body.setOffset(10, 20);
    // platforms.create(175, 600, 'ground');
    platforms.create(350, 500, 'planet9').setDisplaySize(200, 200).refreshBody().body.setOffset(10, 20);
    // platforms.create(425, 800, 'ground');
    platforms.create(550, 800, 'planet4').setDisplaySize(200, 200).refreshBody().body.setOffset(10, 20);
    // platforms.create(675, 800, 'ground');
    // platforms.create(625, 400, 'box');
    // platforms.create(800, 800, 'ground');
    // platforms.create(925, 800, 'ground');
    // platforms.create(1050, 600, 'ground');
    // platforms.create(1175, 600, 'ground');
    // platforms.create(1300, 600, 'ground');
    // platforms.create(1425, 600, 'ground');
    // platforms.create(1550, 600, 'ground');
    // platforms.create(1675, 600, 'ground');
    // platforms.create(1800, 600, 'ground');
    // platforms.create(1925, 600, 'ground');
    // platforms.create(2050, 600, 'ground');
    // platforms.create(2175, 600, 'ground');
    // platforms.create(2300, 600, 'ground');
    // platforms.create(2425, 600, 'ground');
    // platforms.create(2550, 600, 'ground');
    // platforms.create(2675, 600, 'ground');
    // platforms.create(2800, 600, 'ground');
    // platforms.create(2925, 600, 'ground');
    // platforms.create(3050, 600, 'ground');
    // platforms.create(3175, 600, 'ground');
    // platforms.create(3300, 600, 'ground');
    // platforms.create(3425, 600, 'ground');
    // platforms.create(3550, 600, 'ground');
    // platforms.create(3675, 600, 'ground');
    // platforms.create(3800, 600, 'ground');
    // platforms.create(3925, 600, 'ground');

    player = this.physics.add.sprite(50, 100, 'player');  // Create player sprite
    player.setBounce(0.2);  // Set player bounce
    player.setCollideWorldBounds(true);  // Keep player within game world bounds

    // Set up collisions between player and platforms
    this.physics.add.collider(player, platforms);

    // planet1 = this.physics.add.sprite(300, 0, 'planet1');  // Create player sprite
    // planet1.setDisplaySize(100, 100);
    // planet1.refreshBody();
    // planet1.setCollideWorldBounds(true);  // Keep player within game world bounds

    // Set up collisions between player and platforms
    // this.physics.add.collider(player, platforms);

     // Make camera follow player and stay within world bounds
    this.cameras.main.startFollow(player, true, 0.05, 0.05);
    this.cameras.main.setBounds(0, 0, 4000, 2000);  // The second parameter is the world height
}


function update() {
    // Create cursor keys for player movement
    let cursors = this.input.keyboard.createCursorKeys();

    // Reset player velocity
    player.setVelocityX(0);

    // Move player left, right, or jump
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else if (cursors.up.isDown && player.body.touching.down) {
        player.setVelocityY(-600);
    }
}

