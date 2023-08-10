//traditional function
function add(a,b){
    return a+b;
}

console.log(add("abes","it"));

//function expression
const x = function (a,b) {return a+b;}
console.log(x(2,3));

//Self-invoking Functions
(function(a,b){
    console.log(a+b);
})(10,20);

/*unctions are object
function display(a,b,c){
    console.log(a+b+c);
}(10,20,30);
*/