var res = 1080;
var showRes = 300;

var sketch = function(p){

  p.capturer = new CCapture( { 
    format: 'webm',
    framerate: 60,
	  verbose: true,
  } );

  p.x = 0;
  p.y = 0;
  p.size = 1080;

  p.setup = function(){
    p.canvas = p.createCanvas(res,res);
    p.myRender = p.canvas.canvas;
    hidCanvas();
    changeSize();
  }

  p.draw = function(){

    if(p.frameCount == 1){
      startThis();
    }

    p.background(0,0,255);
    p.fill(255,255,0);
    p.noStroke();
    p.ellipseMode(p.CORNER);
    p.ellipse(p.x,p.y,p.size,p.size);

    p.x+= 0.5;

    if(p.x > p.width){
      p.x = 0;
    }

    copyAll();

    if(p.frameCount < 60){
      recordThis();
    } else if(p.frameCount == 60){
      endThis();
    }
  }
}

var show = new p5(sketch);
var ren = new p5(sketch);