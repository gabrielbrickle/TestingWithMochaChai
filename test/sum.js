
"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

function sum (a,b) {
  return a + b;
}

function subtract (a,b) {
  return a - b;
}

function multiply (a,b) {
  return a * b;
}

function divide (a,b) {
  return a / b;
}




describe('doing math using addition multiplication subtraction and division', function(){
  it("does addition", function(){
    // Given
    var a = 1;
    var b = 2;
    // When
    var result = sum(a,b);
    // Then
    expect(result).to.equal(3);
  })
  it("does subtraction", function(){
    // Given
    var a=4
    var b=2
    // When
    var result = subtract(a,b)
    // Then
    expect(result).to.equal(2);
  })
  it("does multiplication", function(){
    // Given
    var a=4
    var b=2
    // When
    var result = multiply(a,b)
    // Then
    expect(result).to.equal(8);
  })
  it("does division", function(){
    // Given
    var a=4
    var b=2
    // When
    var result = divide(a,b)
    // Then
    expect(result).to.equal(2);
  })
})
