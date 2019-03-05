// require('./fizzBuzz.js');

describe('FizzBuzz', function() {

beforeEach(function() {
  fizzBuzz = new FizzBuzz();
});

it("should print out the number", function(){
 expect(fizzBuzz.printnums(2)).toEqual(2);
});

it("should print Fizz instead of 3", function(){
  expect(fizzBuzz.printnums(3)).toEqual("Fizz");
});

it("should print Buzz instead of 5", function(){
  expect(fizzBuzz.printnums(5)).toEqual("Buzz");
})

it("should print FizzBuzz if number is divisible by 3 and 5", function(){
  expect(fizzBuzz.printnums(15)).toEqual("FizzBuzz");
})

});
