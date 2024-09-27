
var x = function (a, b) {
  return a * b;
}

const summary =(x,y)=>{
  return x+y;
}

const substract=(x,y)=>{ return x-y}

// call this function
// console.log(x(4, 3)); 
// console.log(summary(7,5));
// console.log(substract(7,5));


// Destructuring means assign array values and object to variables

const human ={
  fullName:'Hussain Mahamud',
  age:29.5,
  profession:'Software Engineer',
  gender: "Male",

}

let {fullName,age,gender} = human;
console.log(`Name: ${fullName} Age: ${age} Gender: ${gender}`)