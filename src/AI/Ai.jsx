import Facts from "./Common/Facts";
import Jokes from "./Common/Jokes";
import responses from "./Responses";
import stringSimilarity from "string-similarity"; // Import a string similarity library, you may need to install it

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

  if (inputLower.includes("fact") || inputLower.includes("joke")) {
    const randomResponse = getRandomResponse(
      inputLower.includes("fact") ? Facts : Jokes,
      lastResponseType === "fact" ? lastFactIndex : undefined
    );
    lastResponseType = inputLower.includes("fact") ? "fact" : "joke";
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
    const [num1, operator, num2] = expression
      .split(/[\s\?]/)
      .filter(Boolean)
      .map((str) => (isNaN(str) ? str : parseFloat(str)));

    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid math operation. Please provide valid numbers.";
    }

    let result;
    switch (operator) {
      case "+":
        result = add(num1, num2);
        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
      case "^": // Handle power operations
        result = Math.pow(num1, num2);
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
