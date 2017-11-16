function helloYou(name) {
  console.log("Hello " + name);
}

function addNum(num1, num2){
  console.log(num1 + num2);
}

function helloSomeone(name = "Frankie", title="Sir"){
  console.log(title + " "+ name);
}

function timesFive(numInput){
  var result = numInput * 5;
  return result;
}

// Global stuff
var v = "GLOBAL V";
var stuff = "GLOBAL STUFF";

function fun(stuff){
  console.log(v);
  stuff = "Reassign stuff inside func";
  console.log(stuff);
}

fun();
console.log(stuff);
