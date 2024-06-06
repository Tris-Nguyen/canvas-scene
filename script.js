// HTML Canvas

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 500;

// Sky
ctx.fillStyle = "lightskyblue";
ctx.fillRect(0, 0, 600, 400);

// Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 60, 25, 0, 2 * Math.PI);
ctx.fill();

// Grass
ctx.fillStyle = "green";
ctx.fillRect(0, 400, 600, 200);

// Tree image
let tree = document.getElementById("tree-img");
ctx.drawImage(tree, 230, 230, 140, 180);

// House - square
ctx.fillStyle = "beige";
ctx.fillRect(50, 200, 240, 215);

// House - triangle
ctx.fillStyle = "beige";
ctx.beginPath();
ctx.moveTo(50, 200);
ctx.lineTo(170, 120);
ctx.lineTo(180, 120);
ctx.lineTo(290, 200);
ctx.fill();

// Roof thick line
ctx.fillStyle = "black";
ctx.beginPath();
ctx.lineWidth = 10;
ctx.moveTo(40, 200);
ctx.lineTo(175, 120);
ctx.lineTo(300, 200);
ctx.stroke();

// Door
ctx.fillStyle = "maroon";
ctx.fillRect(133, 300, 75, 115);

// Door knob
ctx.fillStyle = "gold";
ctx.beginPath();
ctx.arc(195, 370, 7, 0, 2 * Math.PI);
ctx.fill();

// Window 1
ctx.fillStyle = "black";
ctx.fillRect(55, 380, 65, 5);

ctx.fillStyle = "black";
ctx.fillRect(55, 250, 65, 5);

ctx.fillStyle = "black";
ctx.fillRect(55, 250, 5, 130);

ctx.fillStyle = "black";
ctx.fillRect(115, 250, 5, 130);

// Glass
ctx.fillStyle = "lightsteelblue";
ctx.fillRect(60, 255, 55, 125);

// Thinner lines on window
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(87, 250); // start
ctx.lineTo(87, 380); // end
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(55, 340); // start
ctx.lineTo(120, 340); // end
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(55, 300); // start
ctx.lineTo(120, 300); // end
ctx.stroke();

// Window 2
ctx.fillStyle = "black";
ctx.fillRect(220, 380, 65, 5);

ctx.fillStyle = "black";
ctx.fillRect(220, 250, 65, 5);

ctx.fillStyle = "black";
ctx.fillRect(220, 250, 5, 130);

ctx.fillStyle = "black";
ctx.fillRect(280, 250, 5, 130);

// Glass
ctx.fillStyle = "lightsteelblue";
ctx.fillRect(225, 255, 55, 125);

// Thinner lines on window
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(252, 250); // start
ctx.lineTo(252, 380); // end
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(220, 340); // start
ctx.lineTo(280, 340); // end
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(220, 300); // start
ctx.lineTo(280, 300); // end
ctx.stroke();

// Tree image 2
let tree2 = document.getElementById("tree-img");
ctx.drawImage(tree2, 440, 240, 150, 240);

// Cloud images
let cloud = document.getElementById("cloud-img");
ctx.drawImage(cloud, 60, 40, 100, 60);
ctx.drawImage(cloud, 240, 70, 130, 60);
ctx.drawImage(cloud, 440, 20, 120, 70);

// Stickman Head
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(375, 350, 20, 0, 2 * Math.PI);
ctx.stroke();

// Stickman torso
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(375, 370);
ctx.lineTo(375, 410);
ctx.stroke();

// Stickman arms
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(375, 390);
ctx.lineTo(350, 380);
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(375, 390);
ctx.lineTo(400, 380);
ctx.stroke();

// Stickman legs
ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(375, 410);
ctx.lineTo(360, 440);
ctx.stroke();

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(375, 410);
ctx.lineTo(390, 440);
ctx.stroke();

// Text
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("An Outdoor Scene", 220, 40);
