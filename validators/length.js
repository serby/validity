/**
 * Validates a string is not too short or too long.
 *
 * @param {String} value Postcode to validate
 * @return {Boolean} True if value is a valid format for a UK Postcode
 */
module.exports = function(min, max, value) {
	if (min < 0) {
		throw new RangeError('min must be >= 0');
	}
	if (max < 1) {
		throw new RangeError('max must be >= 1');
	}

	// Convert null and undefined to empty string so they can be length checked.
	switch (value) {
		case undefined:
		case null:
			value = "";
	}

	return (value.length >= min) && (value.length <= max);
};
