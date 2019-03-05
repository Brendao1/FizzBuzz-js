function FizzBuzz() {

//var fizzBuzz = new Fizzbuzz();
FizzBuzz.prototype.printnums = function(num) {
  // console.log(3);
  if ((num % 3 == 0) && (num % 5 == 0))
  { return "FizzBuzz" }
    else if (num % 3 == 0)
    { return "Fizz"  }
    else if (num % 5 == 0)
    {return "Buzz" }
  else
  { return num };

};

};
