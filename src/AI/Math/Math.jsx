// Math operations module

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
};

const square = (a) => {
  return a * a;
};

const squareRoot = (a) => {
  return Math.sqrt(a);
};

const cube = (a) => {
  return a * a * a;
};

const cubeRoot = (a) => {
  return Math.cbrt(a);
};

export { add, subtract, multiply, divide, square, squareRoot, cube, cubeRoot };
