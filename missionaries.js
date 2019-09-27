/*
(a) 
Agents: Missionaries and cannibals.
Possible actions: The movement of one or two agents from one set to the other, 
ensuring number of missionaries in any place is >= number of cannibals.
Initial state: All agents begin in set A.
Cost function: 1 per action.
State: A six tuple that lists the number of missionaries, cannibals, and boats
on one side of the river, and then on the second side.
Goal state: (0,0,0,3,3,1) 

(b)
*/

//Environment variables
let Solution;
var i, j, k, a = 0;
var node = new Array(3,3,1,0,0,0);
var path_cost = 0;
var goal_state = new Array(0,0,0,3,3,1);
var frontier = new Array();
var explored = [];
var test, check;

//Actions
var one_m = new Array(-1,0,-1,1,0,1);
var two_m = new Array(-2,0,-1,2,0,1);
var one_c = new Array(0,-1,-1,0,1,1);
var two_c = new Array(0,-2,-1,0,2,1);
var both = new Array(-1,-1,-1,1,1,1);

var actions = new Array(one_m, two_m, one_c, two_c, both);

//
function generate_children (node) {
    var children = new Array();
    for (i=0; i < 5; i++) {
        var potential = new Array();
        for (j=0; j < 6; j++) {
        k = node[j] + actions[i][j];
        potential.push(k);
        }
        if (potential[0] >= potential[1] && potential[3] >= potential[4]) {
            children.push(potential);
        } else if (potential[0] >= potential[1] && potential[3] == 0) {
            children.push(potential);
        }
    }
    return children;
}

function goal_test (nod, goal_state) {
    var n = 0;
    for (i=0; i<nod.length; i++) {
        if (nod[i] == goal_state[i]) {
            
        } else {
            n = 1;
        }
    }
    return n;
}

frontier.push(node);
do {
    
    //Check frontier, expand next node, generate children.
    if (frontier.length == 0) { Solution = "Search failed." } 
    node = frontier.shift();
    explored.push(node);
    var child_set = generate_children(node);
    
    //Check whether children exist in frontier or explored sets.
    let arrcheck = explored.concat(frontier);
    var arrcheck_inside = new Array();
    for (i=0; i<arrcheck.length; i++) {
      arrcheck_inside.push(JSON.stringify(arrcheck[i]));
    }
    child_set = child_set.filter(function(val) {
      return arrcheck_inside.indexOf(JSON.stringify(val)) == -1;    
    });
    
    //Check any children are the goal state, otherwise add to frontier.
    for (i=0; i<child_set.length; i++) {
      test = child_set[i];
      var tester = new Array(1,2,3,4,5,6);
      check = goal_test(tester, goal_state);
      if (check == 0) {Solution = child_set[i]}
      else if (check == 1) {
        frontier.push(test);  
      }
    }
    node = Array();
   
   a += 1;
    
}
//while (!Array.isArray(Solution));
while (a < 1);


//console.log("node " + node);
console.log(goal_test(tester, goal_state));
console.log(test);
console.log(frontier);
//console.log("explored: " + explored);

//console.log(child_set);

//console.log(check);