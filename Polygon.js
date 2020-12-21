
class PolyClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':100,
            'density':5
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("polygon.png")
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
      }
}