//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  //Start coding here
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const currentNumber = romanNumber[s[i]];
    const nextNumber = romanNumber[s[i + 1]];

    if (nextNumber > currentNumber) {
      result += nextNumber - currentNumber;
      i++;
    } else {
      result += currentNumber;
    }
  }
  return console.log(result);
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994
