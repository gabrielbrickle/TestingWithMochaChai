"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;


function summation(arr){
      var total= 0;
  for ( var i = 0; i < arr.length; i++ ){
      total += arr[i];
  }
  return total;
}



describe ("summing an array of numbers", function (){
  it("sums an array", function(){
    // Given
    var numbers = [1,1,1];
    // When
    var result = summation(numbers)
    // Then
    expect(result).to.equal(3);
  })
})
