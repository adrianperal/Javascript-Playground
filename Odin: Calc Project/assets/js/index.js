const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const firstValue = 0;
const operator = "";
const secondValue = 0;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

let result = "";
let prevResult = "";
let prevOperator = "";

function appendDigit(digit, event) {
  event.preventDefault();
  result += digit;
  document.getElementById("result").value = result;
}

function addOperator(operator, event) {
  event.preventDefault();
  if (result !== "") {
    if (prevResult === "") {
      prevResult = result;
    } else {
      prevResult = operate(
        prevOperator,
        parseFloat(prevResult),
        parseFloat(result)
      );
    }
    prevOperator = operator;
    result = "";
    document.getElementById("result").value = prevResult + operator;
  } else if (prevResult !== "" && prevOperator !== "") {
    prevOperator = operator;
    document.getElementById("result").value = prevResult + prevOperator;
  }
}

function clearResult(event) {
  event.preventDefault();
  result = "";
  prevResult = "";
  prevOperator = "";
  document.getElementById("result").value = result;
}

// function calculate(event) {
//   event.preventDefault();
//   try {
//     result = eval(result);
//     document.getElementById("result").value = result;
//   } catch (error) {
//     alert(error.message);
//   }
// }

// function calculate(event) {
//   event.preventDefault();
//   const operators = ["+", "-", "*", "/"];
//   let operator;
//   let operands;

//   for (let i = 0; i < operators.length; i++) {
//     const index = result.indexOf(operators[i]);
//     if (index !== -1) {
//       operator = operators[i];
//       operands = [result.slice(0, index), result.slice(index + 1)];
//       break;
//     }
//   }

//   if (!operator || !operands[0] || !operands[1]) {
//     alert("Invalid input");
//     return;
//   }

//   try {
//     const a = parseFloat(operands[0]);
//     const b = parseFloat(operands[1]);
//     result = operate(operator, a, b).toString();
//     document.getElementById("result").value = result;
//   } catch (error) {
//     alert(error.message);
//   }
// }

function calculate(event) {
  event.preventDefault();
  // If there is no input, do nothing
  if (result === "") {
    return;
  }
  try {
    // Match all pairs of numbers and operators using a regular expression
    let pairs = result.match(
      /(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/g
    );
    // Get the first number in the first pair
    let previous = parseFloat(pairs[0].match(/-?\d+(?:\.\d+)?/)[0]);
    let operator = null;
    // Iterate over each pair of numbers and operators
    for (let i = 0; i < pairs.length; i++) {
      // Match the current pair of numbers and operator using a regular expression
      const pair = pairs[i].match(
        /(-?\d+(?:\.\d+)?)\s*([+\-*/])\s*(-?\d+(?:\.\d+)?)/
      );
      // Get the operator in the current pair
      operator = pair[2];
      // Get the next number in the current pair
      const next = parseFloat(pair[3]);
      // Apply the current operator to the previous and next numbers
      previous = operate(operator, previous, next);
    }
    // Set the result to the final calculated value
    result = previous.toString();
    // Update the input element with the result
    document.getElementById("result").value = result;
    // Reset the previous result and operator
    prevResult = "";
    prevOperator = "";
  } catch (error) {
    // If there is an error, log it to the console and display an error message on the page
    console.error(error);
    document.getElementById("error-message").textContent = error.message;
  }
}

