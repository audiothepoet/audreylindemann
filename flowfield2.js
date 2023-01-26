var inc=0.05;
var scl = 10;
var cols, rows;
var zoff=0;
let diam=600;
let diam2=600;
let diam3=400;
let expand=true;
let expand2=true;
let img2;
let img3;
var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;
var xCoord3 = 0;
var yCoord3 = 0;
var xCoord4 = 0;
var yCoord4 = 0;
var booly=false;
var counter=0;
let s=' " Amplifier   of   weak   signals'
let s2= 'Enhancer   of   low   probabilities " '
let s3='- T. Susan Chang'
let s4='music';
let s5='other';


function preload(){
    img1 =loadImage("assets/audio2.png");
	img2=loadImage("assets/hand.png");
}
var particles=[];
let shape;
let shape2;
let shape3;
var flowfield;


function setup() {
  myfont=loadFont("assets/font.ttf");
  sentenceArray1=s.split("");
  sentenceArray2=s2.split("");
  textAlign(CENTER,CENTER);
  textSize(300);
  xCoord2 = 0;
  yCoord2 = height / 2;
  var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent('canvasForHTML');
	cols= floor(width/scl);
	rows=floor(height/scl);
    for (var i=0; i<400; i++){
        particles[i]= new Particle();
    }

    background(0);
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

	function polygon(x, y, radius, npoints) {
		fill(255,20);
		stroke(0,50);
		let angle = TWO_PI / npoints;
		beginShape();
		for (let a = 0; a < TWO_PI; a += angle) {
		  let sx = x + cos(a) * radius;
		  let sy = y + sin(a) * radius;
		  vertex(sx, sy);
		}
		endShape(CLOSE);
	}
	if (!booly){
	push();
	polygon(windowWidth/9,windowHeight,random(windowWidth/7),random(7));
	pop();

	
	push();
	polygon(windowWidth/9,0,random(windowWidth/7),random(7));
	pop();
	}

	

	
	push();
	
	for (var i = 0; i < 20; i++) {

		if ((xCoord2 > width) | (xCoord2 < 10) | (yCoord2 > height/1.5) | (yCoord2 < 0)) {
			xCoord2 = int(random(width/1.5, width/2.2));
			yCoord2 = height/10;
				rotate(random(0,PI/8));
			}
			
		
		xCoord1 = xCoord2;
		yCoord1 = yCoord2;
		xCoord2 = xCoord1 + int(random(-20, random(1,29)));
		yCoord2 = yCoord1 + int(random(-10, 30));
			if (yCoord2<height/2){
				strokeWeight(random(2, 3));
			}
			else if (yCoord2<height/1.5){
				strokeWeight(random(1, 2));
			}
			else{
				strokeWeight(random(0.3,1));
			}
		stroke(255, 255, 0);
		//strokeWeight(random(2, 7));
		strokeJoin(MITER);
		if (diam3>600){
			line(xCoord1, yCoord1, xCoord2, yCoord2);
		}
	}
	
	pop();
	
	
	push();
	fill(0,40);
	//stroke(255,255,0);
	shape= ellipse(width/1.9,height/2,diam/1.6);
		if (diam>900){
			expand=false;
			//stroke(238,75,43,30);
		}
		if (diam<800){
			expand=true;
			//stroke(238,75,43,30);
		}
		if (expand){
			diam++
		}
		if (!expand){
			diam--
		}
	pop();
	
	push();
	stroke(random(0,255),random(0,255),random(0,255),40);
	if (booly){
		fill(255,50);
		strokeWeight(20);
		stroke(random(0,255),random(0,255),random(0,255),100);
		diam3=640;
		shape3= ellipse(width/1.9,height/2,diam3);
		if (diam3>650){
		expand2=false;
		}
		if (diam3<350){
		expand2=true;
		}
		if (expand2){
		diam3++
		}
		if (!expand2){
		diam3--
		}
	} else {
		fill(0,7);
		strokeWeight(10);
		shape3= ellipse(width/1.9,height/2,diam3);
			if (diam3>1100){
			expand2=false;
			}
			if (diam3<600){
			expand2=true;
			}
			if (expand2){
			diam3++
			}
			if (!expand2){
			diam3--
			}
	}
	pop();

	if (!booly){
	push();
	tint(255,30);
	image(img1,windowWidth-650,0,windowWidth/2.1,windowHeight+20);
	pop();
	}

	push();
	if (booly){
		fill(0,150);
	}
	noStroke();
	shape2= ellipse(width/1.9,height/2,diam2/1.8);
	pop();

	push();
	rotate(-PI/(4 ));
	tint(240,105,80,225);
	image(img2,-20,715,windowWidth/3.9,windowHeight-100);
	pop();

	if(!booly){
		push();
		fill(0,15);
		textFont(myfont);
		noStroke();
		textSize(windowWidth/35,windowHeight/35);
		text(s4,windowWidth/10,windowHeight/20);
		pop();

		push();
		fill(0,15);
		textFont(myfont);
		noStroke();
		textSize(windowWidth/35,windowHeight/35);
		text(s5,windowWidth/10,windowHeight/1.06);
		pop();
	}	

	if (booly){
		push();
		fill(0,80);
		strokeWeight(0.9);
		textSize(windowWidth/50,windowHeight/45);
		textFont(myfont);
		text(s,windowWidth/1.95,windowHeight/6);
		pop();
		push();
		fill(0,80);
		textFont(myfont);
		strokeWeight(0.9);
		textSize(windowWidth/50,windowHeight/45);
		text(s2,windowWidth/1.95,windowHeight/4.5);
		pop();
		push();
		fill(0,80);
		textFont(myfont);
		strokeWeight(0.9);
		textSize(windowWidth/45,windowHeight/45);
		text(s3,windowWidth/1.95,windowHeight/1.08);
		pop();
	}	

}	
	
	

		
	
function keyPressed(){
	background(255);
	counter++;
	if (counter%2==0){
		booly=false;
		clear();
	} else{
		booly=true;
		clear();
	}
	clear();

}
		




