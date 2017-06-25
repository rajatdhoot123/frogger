$( ".avtar" ).click(function() {
            alert("Your Avatar Has Been Changed");
        player.sprite = $(this).attr('src');
    });


// $( document ).ready(function() {
//         $( ".avtar" ).click(function() {
//             alert("Clicked on Girl Image");
//          player.sprite =   $(".demo").children('h3').text();
//          console.log(player.sprite);
//     });
// });

// $( document ).ready(function() {
//         $( ".avtar" ).click(function() {
//             alert("Clicked on Girl Image");
//          player.sprite =   $(this).attr('alt');
//          console.log(player.sprite);
//     });
// });


var c = 0;
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
        this.x += dt * this.speed;
        if (this.x >505){
        this.x = 0;
        }
        // allEnemies.forEach(function(enemy) {
        // if  ((player.y < (enemy.y + 40) && player.y > enemy.y) && (enemy.x >= player.x - 50.5 && enemy.x <= player.x + 50.5)){
        // console.log("Collision Occer   player.y " + player.y+ "Enemy.y ===="+ enemy.y);
        // player.x = 0;
        // player.y = 400;
        // c = 0;
        // $("#score")[0].innerText="Your Score is " + c;
        // }
        // });
    checkCollisions();
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

var Player = function(x,y){                    // Now write your own player class
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function(dt){       //This class requires an update(),
};

Player.prototype.render = function() {
    console.log(this.sprite);         //  This class requires render() and
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


Player.prototype.handleInput = function(a){
    console.log(a);
    if (a == 'right'){
        this.x = this.x + 101;
        //console.log(this.x);
    }

    if (a == 'left'){
        this.x = this.x - 101;
       // console.log(this.x);
    }

    if (a == 'up'){
        this.y = this.y - 83;
       // console.log(this.y);
    }
    if (a == 'down'){
        this.y = this.y + 83;
        //console.log(this.y);
    }

    if(this.x > 404){
        this.x = 0;
    }

    if (this.x < -4){
        this.x = 400;
    }
    if (this.y > 400){
        this.y = 400;
    }
    if (this.y < -10){
        this.y = 400;
        c = c + 1;
        console.log(c);
        $("#score")[0].innerText="Your Score is " + c;
    }
};

var player = new Player(0,400);   // Place the player object in a variable called player
var enemy1 = new Enemy(0,65,80);// Now instantiate your objects.
var enemy2 = new Enemy(0,150,25);
var enemy3 = new Enemy(0,230,50);
var allEnemies = [];// Place all enemy objects in an array called allEnemies
allEnemies.push(enemy1,enemy2,enemy3);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



/*checkCollisions = function(){

    if  ((player.y < (enemy2.y + 40) && player.y > enemy2.y) && (enemy2.x >= player.x - 50.5 && enemy2.x <= player.x + 50.5)){
        console.log("Collision Occer   player.y " + player.y+ "Enemy.y ===="+ enemy2.y);
        player.x = 0;
        player.y = 400;
        console.log(enemy2.y);
        console.log("Collision occour       ");
    }

    if ((player.y < (enemy1.y + 40) && player.y > enemy1.y) && (enemy1.x >= player.x - 50.5 && enemy1.x <= player.x + 50.5)){
        console.log("Collision Occer  player.y  " + player.y+ "Enemy.y ===="+ enemy1.y);
        player.x = 0;
        player.y = 400;
        console.log("Collision occour       ");
    }


}*/



checkCollisions = function(){
    allEnemies.forEach(function(enemy) {
        if  ((player.y < (enemy.y + 40) && player.y > enemy.y) && (enemy.x >= player.x - 50.5 && enemy.x <= player.x + 50.5)){
        console.log("Collision Occer   player.y " + player.y+ "Enemy.y ===="+ enemy.y);
        player.x = 0;
        player.y = 400;
        c = 0;
        $("#score")[0].innerText="Your Score is " + c;
        }
        });
}

// $( document ).ready(function() {
//         $( ".catgirl" ).click(function() {
//             alert("Clicked on Girl Image");
//          player.sprite =   $( "div.demo" ).text();
//          console.log(player.sprite);
//     });
// });
