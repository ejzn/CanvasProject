
/*
 * Shape.js 
 * A small library for creating chapes in HTML5
 * you can alter the move method based on what you want to do. 
 */

/* This class is the base class for a shape, since shapes will be moving
 * I figured it best to give them all the same base class, which can then
 * be overriden later on code here derived from: http://www.efeion.com/canvastest/test.html
 */
function Shape( x, y)
{
	this.x = x;
	this.y = y;
	this.dx = Math.ceil(Math.random()*7);
	this.dy = Math.ceil(Math.random()*7);

	this.draw = function(){}
	
	this.getX = function(){
		return this.x;
	}
	
	this.getY = function(){
		return this.y;
	}
	
	this.move = function(){	
		
		if(this.x > canvasWidth || this.x < 0){
			this.dx = this.dx*-1;
		}
	
		if(this.y > canvasHeight || this.y < 0){
			this.dy = this.dy*-1;
		}
		this.x += this.dx;
		this.y += this.dy;

	}
}

function Square(width, height, x, y )
{
	this.prototype = new Shape( x, y);
	Shape.apply( this, arguments );
	this.draw = function(){
		canvas.beginPath();
                canvas.rect(this.x,this.y,width,height);
                canvas.closePath();
                canvas.fill();
                canvas.stroke();		
	}

}
function Circle(radius, x, y)
{
	this.prototype = new Shape( x, y);
	Shape.apply( this, arguments );
	this.draw = function(){
		canvas.beginPath();
                canvas.arc(this.x, this.y, radius, 0, Math.PI*2, true);
                canvas.fill();
		canvas.stroke();
	}
}

