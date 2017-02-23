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
  location: false
  velocity: false

  this.location = location;
  step = function() {
      acceleration = this.flock(neighbours)
      velocity.add(acceleration).limit(MAX_SPEED)
      location.add(velocity)
  }

  flock = function(neighbours) {
    separation = this.separate(neighbours).multiply(SEPARATION_WEIGHT)
    alignment = this.align(neighbours).multiply(ALIGNMENT_WEIGHT)
    cohesion = this.cohere(neighbours).multiply(COHESION_WEIGHT)
    return separation.add(alignment).add(cohesion)
  }
}