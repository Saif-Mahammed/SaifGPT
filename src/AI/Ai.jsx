import Facts from "./Common/Facts";
import Jokes from "./Common/Jokes";
import Riddles from "./Common/Riddles"; // Import the Riddles array
import responses from "./Responses";
import stringSimilarity from "string-similarity";
import FunFacts from "./Common/FunFacts";

let lastResponseType = "";

const aiFunction = (input) => {
  const inputLower = input.toLowerCase().trim();

  if (inputLower.includes("calculate") || inputLower.includes("what is")) {
    const mathExpression = extractMathExpression(inputLower);
    if (mathExpression) {
      const result = performMathOperation(mathExpression);
      lastResponseType = "math";
      return result;
    }
  }

  if (
    inputLower.includes("fact") ||
    inputLower.includes("joke") ||
    inputLower.includes("riddle") ||
    inputLower.includes("fun fact") // Include "fun fact" as a trigger
  ) {
    // Include the new fun facts in the random response selection
    const randomResponse = getRandomResponse(
      inputLower.includes("fact")
        ? Facts
        : inputLower.includes("joke")
        ? Jokes
        : inputLower.includes("riddle")
        ? Riddles
        : FunFacts,
      lastResponseType === "fact" ? lastFactIndex : undefined
    );
    lastResponseType = inputLower.includes("fact")
      ? "fact"
      : inputLower.includes("joke")
      ? "joke"
      : inputLower.includes("riddle")
      ? "riddle"
      : "fun fact";
    return randomResponse;
  }

  let bestMatch = findBestMatch(inputLower, responses);

  if (bestMatch.rating > 0.7) {
    const matchedResponse =
      responses[bestMatch.bestMatchIndex].response[
        Math.floor(
          Math.random() * responses[bestMatch.bestMatchIndex].response.length
        )
      ];
    lastResponseType = "response";
    return matchedResponse;
  }

  lastResponseType = "unknown";
  return "I'm not sure how to respond to that. Can you ask another question?";
};
const findBestMatch = (input, responseArray) => {
  const similarityScores = responseArray.map((entry) =>
    stringSimilarity.compareTwoStrings(input, entry.question.toLowerCase())
  );

  const bestMatchIndex = similarityScores.indexOf(
    Math.max(...similarityScores)
  );
  const bestMatch = {
    bestMatchIndex,
    rating: similarityScores[bestMatchIndex],
  };

  return bestMatch;
};

const extractMathExpression = (input) => {
  const regex = /(\d+(\.\d+)?)\s*([\+\-\*\/^])\s*(\d+(\.\d+)?)/; // Include '^' for power operations
  const match = input.match(regex);
  return match ? match[0] : null;
};

const performMathOperation = (expression) => {
  try {
    const lowerExpression = expression.toLowerCase();

    // Check for square operation
    if (lowerExpression.includes("square")) {
      const number = parseFloat(expression.replace(/[^0-9.]/g, ""));
      if (!isNaN(number)) {
        const result = square(number);
        return `The square of ${number} is: ${result}`;
      }
      return "Please provide a valid number for squaring.";
    }

    // Check for other math operations
    const match = expression.match(
      /(\d+(\.\d+)?)\s*([\+\-\*\/^])\s*(\d+(\.\d+)?)/
    );
    if (!match) {
      return "Invalid math operation. Please provide valid numbers.";
    }

    const [_, num1, operator, num2] = match;

    let result;
    switch (operator) {
      case "+":
        result = add(parseFloat(num1), parseFloat(num2));
        break;
      case "-":
        result = subtract(parseFloat(num1), parseFloat(num2));
        break;
      case "*":
        result = multiply(parseFloat(num1), parseFloat(num2));
        break;
      case "/":
        result = divide(parseFloat(num1), parseFloat(num2));
        break;
      case "^": // Handle power operations
        result = Math.pow(parseFloat(num1), parseFloat(num2));
        break;
      default:
        return "Invalid math operation. Please provide a valid operator.";
    }

    return `The result of ${expression} is: ${result}`;
  } catch (error) {
    return `An error occurred while processing the math operation: ${error.message}`;
  }
};

const getRandomResponse = (responseArray, lastIndex) => {
  const index =
    lastIndex !== undefined
      ? getRandomIndex(responseArray, lastIndex)
      : getRandomIndex(responseArray);
  return responseArray[index];
};

const getRandomIndex = (array, lastIndex) => {
  let newIndex = lastIndex;
  while (newIndex === lastIndex) {
    newIndex = Math.floor(Math.random() * array.length);
  }
  return newIndex;
};

export default aiFunction;
