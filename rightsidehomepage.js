function preload(){
  img1 =loadImage("images/audio.JPG")
}

var points =[]
var pointstwo=[]
var mult = 0.05

function setup() {
  createCanvas(windowWidth, windowHeight);
  noiseDetail(1)
  angleMode(DEGREES)
  var density = 200
  var densitytwo=500
  var space = windowWidth/density
  var spacetwo=windowWidth/densitytwo
  
  
  for (var x=200; x<windowWidth/1.5; x+=space) {
       for (var y=0; y<windowHeight; y+=space) {
         var p = createVector(x+random(-10,10),y+random(-10,10))
         pointstwo.push(p)
    }
  }   
  for (var x=600; x<windowWidth; x+=spacetwo) {
       for (var y=0; y<windowHeight; y+=spacetwo) {
         var p = createVector(x+random(-10,10),y+random(-10,10))
         points.push(p)
    }
  }  
}

function draw() {
  background(80);
  image(img1,windowWidth/3,0,windowWidth/1.5,windowHeight);
  noStroke();
  var yoff=0;
  for (var i=0; i<points.length; i++){
    fill(100);
    var angle=map(noise(points[i].x * mult,points[i].y * mult),0,1,0,720)
    points[i].add(createVector(cos(angle),sin(angle)))
    ellipse(points[i].x, points[i].y,1)
  }
   for (var i=0; i<pointstwo.length; i++){
    fill(170);
    var angle=map(noise(pointstwo[i].x * mult,pointstwo[i].y * mult),0,1,0,720)
    pointstwo[i].add(createVector(cos(angle),sin(angle)))
    ellipse(pointstwo[i].x, pointstwo[i].y,1.5)
  }
  }
}
