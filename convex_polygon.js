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

function intersection_check (polygon, test) {
  
  
  
return polygon;  
}