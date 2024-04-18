//swap the variable with third variable
var a=10;
var b=20;
var c=a;
a=b;
b=c;
console.log(a)
console.log(b)
console.log(c)
  

//how to swap the variable without third variable
//using object destructuring
var a=10;
var b=20;
var [a,b]=[b,a]
console.log(a)
console.log(b)