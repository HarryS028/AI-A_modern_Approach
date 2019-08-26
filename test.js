var i;
var child_set = new Array([1,1,1,1],[3,3,3,3]);
var arrcheck = new Array([1,1,1,1],[2,2,2,2]);
var arrcheck_inside = new Array();
let test = "Hello";
var frontier = new Array();

for (i=0; i<arrcheck.length; i++) {
  arrcheck_inside.push(JSON.stringify(arrcheck[i]));
}

child_set = child_set.filter(function(val) {
  return arrcheck_inside.indexOf(JSON.stringify(val)) == -1;    
});

console.log(child_set);
console.log(typeof arrcheck);

console.log(typeof child_set);
console.log(typeof test);

var tester = new Array([1,1,1,1],[2,2,2,2],[3,3,3,3]);
console.log(frontier);

for (i=0; i<tester.length; i++) {
      test = tester[i];
     
        frontier.push(test);  
     
  }
  
  console.log(frontier);
  
  