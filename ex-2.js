//Exercise 2: Fizz Buzz

const fizzBuzz = function (n) {
  //Start coding here
  let arrayN = [];
  for (let i = 0; i < n; i++) {
    arrayN.push(i + 1);
  }
  const result = arrayN.map((item) => {
    if (item % 3 === 0 && item % 5 === 0) {
      return (item = "FizzBuzz");
    } else if (item % 3 === 0) {
      return (item = "Fizz");
    } else if (item % 5 === 0) {
      return (item = "Buzz");
    } else {
      return (item = String(item));
    }
  });
  return result;
};

const result1 = fizzBuzz(3);
const result2 = fizzBuzz(5);
const result3 = fizzBuzz(15);

console.log(result1); // ["1","2","Fizz"]
console.log(result2); // ["1","2","Fizz","4","Buzz"]
console.log(result3); // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
