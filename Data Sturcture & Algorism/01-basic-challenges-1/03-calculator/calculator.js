function calculator(num1, num2, operator) {
  //   if (c === '+') {
  //     return a + b;
  //   } else if (c === '-') {
  //     return a - b;
  //   } else if (c === '*') {
  //     return a * b;
  //   } else if (c === '/') {
  //     return a / b;
  //   } else {
  //     return throw new Error("Invalid Operator")
  //   }

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      throw new Error('invalid Operator');
  }

  return result;
}

console.log(result);

module.exports = calculator;
