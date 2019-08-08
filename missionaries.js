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
var i, j, k;
var node = new Array(3,3,1,0,0,0);
var path_cost = 0;
var goal_state = new Array(0,0,0,3,3,1);
var frontier = new Array(0);
var explored = [];

//Actions
var one_m = new Array(-1,0,-1,1,0,1);
var two_m = new Array(-2,0,-1,2,0,1);
var one_c = new Array(0,-1,-1,0,1,1);
var two_c = new Array(0,-2,-1,0,2,1);
var both = new Array(-1,-1,-1,1,1,1);

var actions = new Array(one_m, two_m, one_c, two_c, both);

//
function generate_children (node) {
    for (i=0; i < 5; i++) {
        for (i=0; i < 6; i++) {
            for (j=0; j < 5; j++) {
            var potential = new Array();
            k = node[i] + actions[j][i];
            potential.push(k);
            if (potential[0] < potential[1] && potential[3] < potential[4]) {
                frontier.push(potential);
            }}
        }
    }
    
    
    
    /*if (node[2] == 1) {
        if (node[0] > node[1] && node[4] > node[5]) {
            node[0] -= 1;
            node[3] += 1;
            frontier.push(node);
        }
    }*/
    return frontier;
}

function goal_test (node, goal_state) {
    var n = 0;
    for (i=0; i<node.length; i++) {
        if (node[i] == goal_state[i]) {
            
        } else {
            n = 1;
        }
    }
    return n;
}

/*do {
    if (frontier.length == 0) { Solution = "Search failed." } 
    node = frontier.shift();
    explored.push(node);
    Solution = 1;
}
while (Solution != 1);*/

console.log(actions);
console.log(generate_children(node));
console.log(node[1]);