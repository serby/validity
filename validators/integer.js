/**
 * Validates that value is an integer.
 *
 * @param {String} value What to validate
 * @return {Boolean} True if it is an integer
 */
module.exports = function(value) {
  if (Array.isArray(value) || (typeof value === 'boolean')) {
    return false
  }
	return Math.round(+value) == value
}
