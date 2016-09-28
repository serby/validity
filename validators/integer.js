/**
 * Validates that value is an integer.
 *
 * @param {String} value What to validate
 * @return {Boolean} True if it is an integer
 */
module.exports = function(value) {
  console.warn('Integer validator deprecated. This will be removed in the next major version.')
  if (Array.isArray(value) || (typeof value === 'boolean')) {
    return false
  }
  /* jshint eqeqeq: false */
	return Math.round(+value) == value
}
