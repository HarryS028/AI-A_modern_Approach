/* (a) Infinite to both.
   (b) The shortest path around a polygon is to travel around its perimeter.
   The state space is the set of 2-tuples that includes the initial position
   of the robot, the vertices of the polygons and the goal state. If a direct line
   to the goal state is not found, then the robot will have to navigate to and around
   various vertices.
   (c) Evaluation function f(n) = g(n) + h(n), where:
   g(n) = cost to reach the current node.
   h(n) = sqrt((xG - xN)^2 + (yG - yN)^2), where xG and xN are the x coordinate
   positions of the goal node and next node respectively. h(n) is a heuristic.
   ACTIONS function:
   https://stackoverflow.com/questions/3838329/how-can-i-check-if-two-segments-intersect
*/

var chord = [[1,1], [2,2]];
var test_line = [[2,3], [3,5]];


function intersection_check (chord, test_line) {
   var intersection;
   var I1 = [Math.min(chord[0][0],chord[1][0]),
      Math.max(chord[0][0],chord[1][0])];
   var I2 = [Math.min(test_line[0][0],test_line[1][0]),
      Math.max(test_line[0][0],test_line[1][0])];
   
   //Quick check in x-direction for intersection.     
   if (Math.max(chord[0][0],chord[1][0]) < 
      Math.min(test_line[0][0],test_line[1][0])) {
         intersection = 0;
      }                  
  
  var A1 = (chord[0][1]-chord[1][1])/(chord[0][0]-chord[1][0]);
  var A2 = (test_line[0][1]-test_line[1][1])/(test_line[0][0]-test_line[1][0]);
  var b1 = chord[0][1] - (A1*chord[0][0]);
  var b2 = test_line[0][1] - (A2*test_line[0][0]);
  
  var Xi = (b1 - b2)/(A1 - A2);
  
  //Check if line segments are parallel.
  if (A1 == A2) {
     intersection = 0;
  }
 
  if(Xi<Math.max(Math.min(chord[0][0],chord[1][0]),Math.min(test_line[0][0],test_line[1][0]))) {
     intersection = 0;
  } else {
     intersection = 1;
  }
  
  /*
  if ( (Xa < max( min(X1,X2), min(X3,X4) )) ||
     (Xa > min( max(X1,X2), max(X3,X4) )) )
    return false; // intersection is out of bound
else
    return true;
  */
  
  
return intersection;  
}


console.log(intersection_check(chord, test_line));