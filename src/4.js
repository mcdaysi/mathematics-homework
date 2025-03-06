// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to calculate the sum of two numbers
function add(a, b) {
  return a + b;
}

// Function to calculate the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Function to calculate the difference between two numbers
function subtract(a, b) {
  return a - b;
}

// Function to calculate the quotient of two numbers
function divide(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero!';
  } else {
    return a / b;
  }
}
