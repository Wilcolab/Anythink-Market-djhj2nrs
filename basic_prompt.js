
// Converts a string to camelCase
function toCamelCase(str) {
	return str
		.replace(/[_\-\s]+/g, ' ') // Replace underscores, hyphens, and spaces with a single space
		.trim()
		.toLowerCase()
		.split(' ')
		.map((word, idx) => {
			if (idx === 0) return word;
			return word.charAt(0).toUpperCase() + word.slice(1);
		})
		.join('');
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber

module.exports = { toCamelCase };
/**
 * Write a function called `toCamelCase` that converts a string to camelCase.
 * The function should remove spaces, dashes, and underscores, and capitalize each word except the first.
 * For example:
 *   toCamelCase('hello world') // returns 'helloWorld'
 *   toCamelCase('convert-to_camel_case') // returns 'convertToCamelCase'
 */