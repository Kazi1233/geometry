class Rubber{
	constructor(x,y,r){
		var options={
			  restitution:0.8,
			  friction:1,
			  density:.1
		}
	
		this.x=x;
		this.y=y;
		this.r=r;
	this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)	
		World.add(world, this.body);

	}
	display()
	{
					
			push()
			translate(this.body.position.x,this.body.position.y);
			ellipseMode(RADIUS)

			ellipse(0,0,this.r,this.r)
			//draw the ellipse here to display the rubber ball

			pop()
	}

}