// chain_prompt.js
// Chain prompt for Copilot: Implement toKebabCase function

/*
Chain Prompt:
1. Write a JavaScript function called toKebabCase that converts any input string to kebab-case.
2. Ensure the function handles multiple word separators (spaces, underscores, hyphens), camelCase, and removes non-letter characters except hyphens.
3. Add error handling to throw a descriptive error if the input is not a non-empty string.
*/

function toKebabCase(input) {
  if (typeof input !== 'string' || !input.trim()) {
    throw new TypeError('Input must be a non-empty string');
  }
  // Insert a space before any uppercase letter (for camelCase)
  let normalized = input.replace(/([a-z])([A-Z])/g, '$1 $2');
  // Replace all separators with spaces
  normalized = normalized.replace(/[_\-\s]+/g, ' ');
  // Remove non-letter characters except hyphens and spaces
  normalized = normalized.replace(/[^a-zA-Z -]+/g, '');
  // Split into words, lowercase, and join with hyphens
  return normalized.trim().split(/\s+/).map(w => w.toLowerCase()).join('-');
}

// Example usage:
// console.log(toKebabCase('first name')); // first-name
// console.log(toKebabCase('user_id')); // user-id
// console.log(toKebabCase('SCREEN_NAME')); // screen-name
// console.log(toKebabCase('mobile-number')); // mobile-number
// console.log(toKebabCase('NASA API')); // nasa-api
// console.log(toKebabCase('camelCaseInput')); // camel-case-input

module.exports = { toKebabCase };
