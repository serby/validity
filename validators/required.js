/**
 * Validates that value is set to something meaningful i.e. not empty string, empty array, null or undefined
 *
 * @param {String} value What to evaluate
 * @return {Boolean} True if value is not
 */
module.exports = function(value) {
  console.warn('Required validator deprecated. This will be removed in the next major version.')
  // false for undefined, null and empty string
  if (value === undefined || value === null || value === '') {
    return false
  // false for empty array
  } else if (Array.isArray(value) && value.length === 0) {
    return false
  // false for empty object (which is not a date)
  } else if (typeof value === 'object' && Object.keys(value).length === 0 && !(value instanceof Date)) {
    return false
  }

  return true
}
