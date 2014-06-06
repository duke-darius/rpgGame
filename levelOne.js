var boxes = [];

// dimensions
boxes.push({
	x: 0,
	y: 0,
	width: 10,
	height: height,
	type: tileBorder
});
boxes.push({
	x: 0,
	y: height - 2,
	width: width,
	height: 50,
	type: tileBorder
});
boxes.push({
	x: width - 10,
	y: 0,
	width: 50,
	height: height,
	type: tileBorder
});
boxes.push({
	x: 0,
	y: 0,
	width: width,
	height: 2,
    type: tileBorder
});
// END BORDER



// START TILES
boxes.push({
	x: 40,
	y: height - 66,
	width: obj.width,
	height: obj.height,
    type: tileDirt
});

boxes.push({
	x: 40 + 64,
	y: height - 66,
	width: obj.width,
	height: obj.height,
    type: tileDirt
});

boxes.push({
	x: 40 + 128,
	y: height - 66,
	width: obj.width,
	height: obj.height,
    type: tileDirt
});

boxes.push({
	x: 40,
	y: height - (66 + 64),
	width: obj.width,
	height: obj.height,
    type: tileDirt
});
boxes.push({
	x: 40 + 64,
	y: height - (66 + 64),
	width: obj.width,
	height: obj.height,
    type: tileDirt
});


// TOPSOIL
boxes.push({
	x: 40 + 128,
	y: height - (66 + 64),
	width: obj.width,
	height: obj.height,
    type: tileGrass
});

boxes.push({
	x: 40,
	y: height - (66 + 128),
	width: obj.width,
	height: obj.height,
    type: tileGrass
});
boxes.push({
	x: 40 + 64,
	y: height - (66 + 128),
	width: obj.width,
	height: obj.height,
    type: tileGrass
});

boxes.push({
	x: 40 + 192,
	y: height - (66),
	width: obj.width,
	height: obj.height,
    type: tileGrass
});


boxes.push({
	x: player.x,
	y: player.y-60,
	width: obj.width*3,
	height: obj.height*3,
    type: tileGrass
});







