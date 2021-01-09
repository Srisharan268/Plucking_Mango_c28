class Tree {
    constructor(x,y,scale) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,20,20,options);
      this.image = loadImage("tree.png");
      this.scale = scale;
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.image.width*this.scale, this.image.height*this.scale);
    }
  };
