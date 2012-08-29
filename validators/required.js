/**
 * Validates that value is set to something meaningful i.e. not empty string, empty array, null or undefined;
 *
 * @param {String} value What to evaluate
 * @return {Boolean} True if value is not
 */
module.exports = function(value) {
	return (value !== undefined) && (value !== null) && (value !== '') && !((typeof value === 'object') && (Object.keys(value).length === 0));
};
