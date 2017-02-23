var y = 100;

// The statements in the setup() function 
// execute once when the program begins
function setup() {
	// createCanvas must be the first statement
  createCanvas(800, 800);  
  stroke(255);     // Set line drawing color to white
  frameRate(30);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  background(0);   // Set the background to black 
} 

function boid(location) {
 //location is a VECTOR- WISH I COULD USE TYPES
  location: false;
  velocity: false;

  this.location = location;

  update = function() {
      acceleration = this.flock(neighbours);
      velocity.add(acceleration).limit(MAX_SPEED);
      location.add(velocity);
  }

  flock = function(neighbours) {
    separation = this.separate(neighbours).mult(SEPARATION_WEIGHT);
    alignment = this.align(neighbours).mult(ALIGNMENT_WEIGHT);
    cohesion = this.cohere(neighbours).mult(COHESION_WEIGHT);
    return separation.add(alignment).add(cohesion);
  }

  //returns P5 vector
  cohere = function(neighbours) {
    let sum = new p5.Vector();
    if(neighbours){
        neighbours.foreach((boid) => {
            distance = this.location.dist()
            if(distance > 0 && distance < target-area){
                sum.add(boid.location);
                this.steer(boid.location);
                count++;
                if(count > 0){
                    return this.steer()
                }else{
                    return sum;
                }
            }
        })
    }
  }

  steer = function(target){
      //get vector pointing to target
      let desiredTarget = p5.Vector.sub(target, this.location);

      //get 
  }

}