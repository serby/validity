/**
 * Validates a UK Postcode
 *
 * @param {String} value Postcode to validate
 * @return {Boolean} True if value is a valid format for a UK Postcode
 */
module.exports = function(value) {
	return (/^[A-Z]{1,2}[0-9]{1,2}[A-Z]? ?[0-9][A-Z]{2}$/i).test(value);
};
