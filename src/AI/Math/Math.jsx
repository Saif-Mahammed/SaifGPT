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

const squareRoot = (a) => {
  if (a >= 0) {
    return Math.sqrt(a);
  } else {
    return "Cannot calculate square root of a negative number!";
  }
};

const power = (base, exponent) => {
  return Math.pow(base, exponent);
};

const sin = (angle) => {
  return Math.sin(angle);
};

const cos = (angle) => {
  return Math.cos(angle);
};

const tan = (angle) => {
  return Math.tan(angle);
};

const log = (base, value) => {
  if (base > 0 && value > 0) {
    return Math.log(value) / Math.log(base);
  } else {
    return "Invalid logarithm. Base and value must be greater than 0.";
  }
};

const linearEquation = (m, b, x) => {
  return m * x + b;
};

const square = (a) => {
  return Math.pow(a, 2);
};

const cube = (a) => {
  return Math.pow(a, 3);
};

const cubeRoot = (a) => {
  return Math.cbrt(a);
};

export {
  add,
  subtract,
  multiply,
  divide,
  squareRoot,
  power,
  sin,
  cos,
  tan,
  log,
  linearEquation,
  square,
  cube,
  cubeRoot,
};
