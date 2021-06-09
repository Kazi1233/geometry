class Plane {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.8,
			  friction:1,
			  density:1,
          isStatic:true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };