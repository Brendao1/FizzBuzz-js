function FizzBuzz() {

FizzBuzz.prototype.printnums = function(num) {
  if ((num % 3 == 0) && (num % 5 == 0))
  { return "FizzBuzz" }
    else if (num % 3 == 0)
    { return "Fizz"  }
    else if (num % 5 == 0)
    {return "Buzz" }
  else
  { return num };

};

FizzBuzz.prototype.printrange = function() {
  for ( i = 0; i < 101; i++) {
    console.log(this.printnums(i))
  };
};

};
