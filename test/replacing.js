"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;


function replace (str) {
    var originalString = str;
    var newString = originalString.replace(/\b[0-9]\b/g, '1337');
  }
// replace("gabe is 7 and 9")
////using regex, believe that the \b set a boundary so that any number between 1-9 wont pass

describe("replacing all numbers between 0 and 9 with '1337'", function(){
  it('replaces numbers', function (){
    // Given
    var originalString= 'Gabe is 26 and Winnie 1 and Max is 4';
    // When
    var newString= originalString.replace(/\b[1-9]\b/g, '1337');
    // Then
    expect(newString).to.equal('Gabe is 26 and Winnie 1337 and Max is 1337');
  })
})
