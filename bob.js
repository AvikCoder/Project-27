class  Bob {
    constructor(x,y,radius){
        var options = {
            isStatic: false,
            
        }
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius 
        World.add(world,this.body)
    }
  display(){
   var pos = this.body.position  
   fill("purple")
   ellipse(pos.x,pos.y,this.radius,this.radius);
  }  
}