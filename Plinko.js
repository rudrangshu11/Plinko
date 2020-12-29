class Plinko {
    constructor(x,y){
        var options = {
            isStatic : true,
            friction : 1,
            density:1.2
    }
    this.body = Bodies.circle(x,y, 10, options);
    this.radius = 10;
    World.add(world, this.body);
}
display(){
    var pos = this.body.position;
    ellipseMode(CENTER);
    fill('white');
    ellipse(pos.x, pos.y, 20,20);
}
}