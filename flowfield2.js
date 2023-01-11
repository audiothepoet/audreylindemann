
var inc=0.1;
var scl = 10;
var cols, rows;
var zoff=0;


var particles=[];

var flowfield;

function setup() {
  createCanvas(windowWidth/3, windowHeight);
	canvas.parent('canvasForHTML');
	cols= floor(width/scl);
	rows=floor(height/scl);
    for (var i=0; i<400; i++){
        particles[i]= new Particle();
    }

    background(255,0,0,4);

    flowfield=new Array(cols*rows);

}


function draw(){
	var yoff=0;
	for (var y=0; y<rows; y++){
		var xoff=0;
		for (var x=0; x<cols; x++){
			var index=x+y*cols;
			var angle=noise(xoff, yoff,zoff)*TWO_PI*4;
			var v = p5.Vector.fromAngle(angle);
            v.setMag(1);
            flowfield[index]=v;
			xoff += inc;
			stroke(0,50);
            strokeWeight(1);
			//push();
			//translate(x*scl, y*scl);
			//rotate(v.heading());
			//line(0,0,scl,0);
			//pop();
		}
		yoff+=inc;
		zoff+=0.0003;
	}
    for (var i=0; i<particles.length;i++){
        particles[i].follow(flowfield);
        particles[i].update();
        particles[i].edges();
        particles[i].show();

    }
}
