
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
//console.log(`Name: ${fullName} Age: ${age} Gender: ${gender}`)
// array destructuring
const fruits = ['Apple','Banana','Mango','Orange','Pineapple'];
let [first,second] = fruits;
//console.log(second);

// Spread operator

const numbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers = [...numbers,11,12,13,14,15];
//console.log(newNumbers);

let maxValue = Math.max(numbers);
//console.log(maxValue);


// for of loop, in array of string and string

const colors = ['Red','Green','Blue','Yellow','Black','White','Pink','Purple','Orange','Brown'];

for (x of colors){
  for (y of x){
    //console.log(y);
  }
}

// map function

const fruitsArray = new Map ([['Apple',100],['Banana',200],['Mango',300],['Orange',400],['Pineapple',500]]);
fruitsArray.set('Grapes',600);
// console.log(fruitsArray.get('Apple'));
// console.log(fruitsArray.get('Grapes'));

const letters = new Set();
letters.add('A');
letters.add('B');
letters.add('C');
// console.log(...letters);

// rest operator
const sum = (...args)=>{
  return args.reduce((a,b)=>a+b);
}
// console.log(sum(1,2,3,4));