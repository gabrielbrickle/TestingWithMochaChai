/////STILL NOT WORKING/////


"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;



// var numbers = ['1','5','3','5','2','6','3','7','8','314','234','4636','65354','13432'];

function randomNumber(anyNumber){
  var randomNumbers= Math.random();
  var lengthOfNumbers= anyNumber.length;
  var guessNumber= Math.floor(randomNumbers * lengthOfNumbers);
  return anyNumber[guessNumber];
}
// randomNumber(numbers);


describe("not printing duplicates from random numbers", function(){
  it("removes dupes", function(){
    // Given
    var numbers = [10,10,2,3,4,4,5,6,7,7,8,9]
    // When
    var randomNumber != randomNumber(numbers);
    // Then
    expect(randomNumber(numbers)).to.equal[10,2,3,4,5,6,7,8,9];
  })
})
