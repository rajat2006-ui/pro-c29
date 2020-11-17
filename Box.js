class Box{
  constructor(x,y,color) {
    var options = {
        //isStatic: true
        density:1.2,
        friction:0.9
    }
    this.body = Bodies.rectangle(x,y,40,50,options);
    this.width = 30;
    this.height = 50;
    this.color=color;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    rectMode(CENTER);
    fill(this.color);
    rect(pos.x, pos.y, this.width, this.height);
    pop();
  }
}
