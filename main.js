// ##Write and Test the following challenges using Mocha and Chai.
// ​
// * Create a class named Muppet that has a constructor that takes a name and age.
// * Create a subclass of Muppet called Frog that has a color attribute.
// * Frogs speak by saying "Ribbit Ribbit"
// * verify the properties: Such as a frog named Kirmet that is green
// * verify frogs speak correctly and muppets speak correctly
class Muppet {
  constructor (name,age) {
    this.name=name;
    this.age=age;
  }
}
class Frog extends Muppet {
  constructor (color) {
    this.color=color;
  }
}
Muppet.prototype.speak = function() {
  console.log("Ribbit Ribbit");
}
let Kirmet = new Frog ('Kirmet', 7, 'green');

// var whatMuppetSays = function(words){
//   if (this.name === "Kirmet") {
//     console.log (this.name + words);
//   } else {
//     console.log("Your muppet can't speak");
//   }
//   whatMuppetSays("Ribbit Ribbit")
// }
// ​
// ​
// Write a function called sum() that returns the sum of 2 numbers
// continue with divide(), multiply() and subtract()
// ​
function sum (a,b) {
  return a + b;
}
sum (a,b);

function subtract (a,b) {
  return a - b;
}
subtract (a,b);

function multiply (a,b) {
  return a * b;
}
multiply (a,b);

function divide (a,b) {
  return a / b;
}
divide (a,b);

// Write a function called summation() that returns the sum of all numbers in an array of numbers
// ​


function summation(arr){
      var total= 0;
  for ( var i = 0; i < arr.length; i++ ){
      total += numbers[i];
  }
  return total;
}

var numbers = [1, 5, 7, 3, 8, 9];

summation(numbers);




// Write a function sum_recursive() that sums all numbers in the provided list of lists (of lists of lists)
// ​
// Write a function Greatest Common Denominator named gcd() using Euclides algorithm that returns an integer
// ​
// Write a function that takes a string that replaces all occurrence of a number character [0...9] to be `1337`
// ​

var num = (0,1,2,3,4,5,6,7,8,9)
str.replace(num, '1337');

// ####Hard Mode
// Write your own shuffle([]) using this Algorithm: https://en.wikipedia.org/wiki/Fisher–Yates_shuffle
// ​
var numbers = ['1','5','3','5','2','6','3','7','8','314','234','4636','65354','13432'];

function randomNumber(anyNumber){
  var randomNumbers= Math.random();
  var lengthOfNumbers= anyNumber.length;
  var guessNumber= Math.floor(randomNumbers * lengthOfNumbers);
  return anyNumber[guessNumber];
}
randomNumber(numbers);

//   if (n !== n) {
//   console.log(n);
// } else {
//   console.log("you're doing something wrong");
// }
// ####Epic Mode
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
// Do not use division in your solution.
