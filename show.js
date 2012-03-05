/* Globals, not my favorite way to do things
 * TODO: Should break this into it's own object that is
 * accessible by the shapes themselves to draw on... 
 */

var canvas;
var width;
var height;
var shapes = new Array();
var canvasWidth;
var canvasHeight;

$(document).ready(function()
{
	
	canvas = $('#show')[0].getContext("2d");
	canvasWidth  = $('#show').width();
	canvasHeight = $('#show').height();

	var i;	
	/* Let's create some shapes */
	for (i=0; i < 10; i ++){
		shapes[i] = new Circle( 20,  0, 0);
	}
	for(i=10;i<20; i++){
		shapes[i] = new Square( 25, 25, 0, 0);
	}

	window.addEventListener('resize', resizeCanvas, false);
	resizeCanvas();

	/* Audio code */
	audio = $('#audio').get(0);
	/*audio.play(); */
	
	$('#play').click(function(){
		audio.play();
	});	
	$('#pause').click(function(){
		audio.pause();
	});	

	return setInterval(draw, 10);	

});

function resizeCanvas(){
	canvas.canvas.width = window.innerWidth;
        canvas.canvas.height = window.innerHeight;
	canvasWidth = window.innerWidth;
	canvasHeight = window.innerHeight;
	draw();
}

function draw(){

	clear();
	var i;
	for ( i = 0; i < shapes.length; i++){
		shapes[i].move();
		shapes[i].draw();
	}
}

function clear(){
	canvas.fillStyle = "#FFF";
	canvas.fillRect(0,0, canvasWidth, canvasHeight);
}

