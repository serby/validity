/**
 * Validates that value is an integer.
 *
 * @param {String} value What to validate
 * @return {Boolean} True if it is an integer
 */
module.exports = function(value) {
	return Math.round(+value) == value;
};
