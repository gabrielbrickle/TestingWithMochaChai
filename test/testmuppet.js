"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;

class Muppet {
  constructor (name,age) {
    this.name=name;
    this.age=age;
  }
  speak (){
    return "Waka Waka";
  }
}
class Frog extends Muppet {
  constructor (name,age,color) {
    super(name,age);
    this.color=color;
  }
  speak (){
    return "Ribbit Ribbit";
  }
}


describe("muppet", function(){
  it('says ribbit', function(){
    //Given
    var kirmet = new Frog("Kirmet",5,'green');
    //When
    var whatMuppetSays= kirmet.speak();
    var kirmetColor= kirmet.color;
    //Then
    expect(whatMuppetSays).to.equal('Ribbit Ribbit');
    expect(kirmetColor).to.equal('green');
  })
  it('says ribbit', function(){
    //Given
    var piggy = new Muppet("MsPiggy",2,'pink');
    //When
    var whatMuppetSays= piggy.speak();
    //Then
    expect(whatMuppetSays).to.equal('Waka Waka');
  })
})
