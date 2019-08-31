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
   /*In addition to this, you may check at startup that two of the four provided points
   are not equals to avoid all that testing.*/
   //Define variables
   var x1 = chord[0][0]; var x2 = chord[1][0];
   var y1 = chord[0][1]; var y2 = chord[1][1];
   var x3 = test_line[0][0]; var x4 = test_line[1][0];
   var y3 = test_line[0][1]; var y4 = test_line[1][1];
 
   //Quick check in x-direction for intersection.     
   if (Math.max(x1,x2) < Math.min(x3,x4)) {
         intersection = 0;
      }                  
  
  var A1 = (y1-y2)/(x1-x2);
  var A2 = (y3-y4)/(x3-x4);
  var b1 = y1 - (A1*x1);
  var b2 = y3 - (A2*x3);
  var Xi = (b1 - b2)/(A1 - A2);
  
  //Check if line segments are parallel.
  if (A1 == A2) {
     intersection = 0;
  }
 
  if( Xi<Math.max(Math.min(x1,x2),Math.min(x3,x4)) ||
      Xi>Math.min(Math.max(x1,x2),Math.max(x3,x4)) ) {
     intersection = 0;
  } else {
     intersection = 1;
  }
  
return intersection;  
}


console.log(intersection_check(chord, test_line));