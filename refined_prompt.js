/**
 * Converts any string to camelCase format.
 *
 * This function normalizes the input by replacing all word separators (spaces, hyphens, underscores)
 * with spaces, removes non-letter characters, and splits the string into words.
 * It preserves acronyms (all-uppercase words), handles various input formats (sentence case, snake_case, etc.),
 * and throws an error for invalid inputs (non-string or empty).
 *
 * Examples:
 *   toCamelCase('first name')      // 'firstName'
 *   toCamelCase('user_id')         // 'userId'
 *   toCamelCase('SCREEN_NAME')     // 'screenName'
 *   toCamelCase('mobile-number')   // 'mobileNumber'
 *   toCamelCase('NASA API')        // 'nasaApi'
 *   toCamelCase('123_invalid')     // 'invalid'
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If input is not a non-empty string.
 */

/**
 * Converts any string to dot.case format.
 *
 * This function normalizes the input by inserting spaces before uppercase letters (to handle camelCase),
 * replacing all word separators (spaces, hyphens, underscores) with spaces, and removing non-letter characters.
 * It then splits the string into words, lowercases them, and joins them with dots.
 * Throws an error for invalid inputs (non-string or empty).
 *
 * Examples:
 *   toDotCase('first name')        // 'first.name'
 *   toDotCase('user_id')           // 'user.id'
 *   toDotCase('SCREEN_NAME')       // 'screen.name'
 *   toDotCase('mobile-number')     // 'mobile.number'
 *   toDotCase('NASA API')          // 'nasa.api'
 *   toDotCase('camelCaseInput')    // 'camel.case.input'
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If input is not a non-empty string.
 */
