(function () {
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 1280,
    height = 720,
    obj = {
    	height: 64,
    	width: 64,
    },
    player = {
        x: width / 2,
        y: height - 15,
        width: 64,
        height: 64,
        speed: 3,
        velX: 0,
        velY: 0,
        jumping: false,
        jump: 2.5,
        grounded: false
    },
    keys = [],
    friction = 0.8,
    gravity = 0.3;


canvas.width = width;
canvas.height = height;

function update() {
    // check keys



    if (keys[38] || keys[32] || keys[87]) {
        // up arrow or space
        if (!player.jumping && player.grounded) {
            player.jumping = true;
            player.grounded = false;
            player.velY = -player.speed * player.jump;
        }
    }
    if (keys[39] || keys[68]) {
        // right arrow
        if (player.velX < player.speed) {
            player.velX++;
        }
    }
    if (keys[37] || keys[65]) {
        // left arrow
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    player.velX *= friction;
    player.velY += gravity;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.drawImage(tileBackGround, 0, 0, width, height);    

    player.grounded = false;
    for (var i = 0; i < boxes.length; i++) {
        // ctx.rect(boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);
        
        ctx.drawImage(boxes[i].type, boxes[i].x, boxes[i].y, boxes[i].width, boxes[i].height);

        var dir = colCheck(player, boxes[i]);

        if (dir === "l" || dir === "r") {
            player.velX = 0;
            player.jumping = false;
        } else if (dir === "b") {
            player.grounded = true;
            player.jumping = false;
        } else if (dir === "t") {
            player.velY *= -1;
        }

    }
    
    if(player.grounded){
         player.velY = 0;
    }
    
    player.x += player.velX;
    player.y += player.velY;

    ctx.fill();
    ctx.drawImage(playerChar, player.x, player.y, player.width, player.height);

    requestAnimationFrame(update);
}

function colCheck(shapeA, shapeB) {
    // get the vectors to check against
    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
        // add the half widths and half heights of the objects
        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
        colDir = null;

    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
        // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.y += oY;
            } else {
                colDir = "b";
                shapeA.y -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.x += oX;
            } else {
                colDir = "r";
                shapeA.x -= oX;
            }
        }
    }
    return colDir;
}

document.body.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

document.body.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});


window.addEventListener("load", function () {
    update();
});


setInterval('debug()', 10);

function debug(){
	$("#player-x").text(player.x.toFixed(2));
	$("#player-y").text(Math.floor(player.y));
	$("#player-width").text(player.width.toFixed(2));
	$("#player-height").text(player.height.toFixed(2));
	$("#player-velX").text(player.velX.toFixed(2));
	$("#player-velY").text(Math.floor(player.velY));
	$("#player-jumping").text(player.jumping);
	$("#player-speed").text(player.speed.toFixed(2));
	$("#player-gravity").text(gravity.toFixed(2));
	$("#player-friction").text(friction.toFixed(2));












}