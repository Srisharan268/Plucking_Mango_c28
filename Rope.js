class Rope{
    constructor(bodyA){
        var options = {
            bodyA:bodyA,
            pointB:{x:175,y:600},
            stiffness:0.04,
            length:0
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
        this.bodyA = bodyA
    }
    fly(){
        this.rope.bodyA = null;
    }
    attach(){
        this.rope.bodyA = this.bodyA;
    }
    display(){
        if(this.rope.bodyA){
            var posA = this.rope.bodyA.position;
            var posB = this.rope.pointB;
            strokeWeight(5);
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
}