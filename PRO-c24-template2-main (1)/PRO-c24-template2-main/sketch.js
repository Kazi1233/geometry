const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone;
var iron;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,570,1200,30)
    hammer = new Hammer(10,100);
rubber1 = new Rubber(600,200,25) 
rubber2 = new Rubber(400,200,25) 
rubber3 = new Rubber(500,200,25) 
rubber4 = new Rubber(600,200,25) 
stone  = new Stone(300,200,30,40) 
iron  = new Iron(800,200,30,40) 
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
   stone.display();
   iron.display();
}