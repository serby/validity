var
	validators = require('../..').validators,
	assert = require('assert');

module.exports = {
	'length in middle of range is valid': function() {
		assert.strictEqual(validators.isLength(5, 10, 'abcdefghi'), true);
	},
	'length at min passes': function() {
		assert.strictEqual(validators.isLength(5, 10, 'abcde'), true);
	},
	'length at min-1 fails': function() {
		assert.strictEqual(validators.isLength(5, 10, 'abcd'), false);
	},
	'length at max passes': function() {
		assert.strictEqual(validators.isLength(5, 10, 'abcdefghij'), true);
	},
	'length at max+1 fails': function() {
		assert.strictEqual(validators.isLength(5, 10, 'abcdefghijk'), false);
	},
	'empty string allowed when min is 0': function() {
		assert.strictEqual(validators.isLength(0, 10, ''), true);
	},
	'undefined values allowed when min is 0': function() {
		assert.strictEqual(validators.isLength(0, 10), true);
	},
	'null values allowed when min is 0': function() {
		assert.strictEqual(validators.isLength(0, 10, null), true);
	},
	'null values not allowed when min is > 0': function() {
		assert.strictEqual(validators.isLength(1, 1, null), false);
	},
	'min < 0 not allowed': function() {
		assert.throws(function() {
			validators.isLength(-1, 10, 'abc');
		});
	},
	'max < 1 not allowed': function() {
		assert.throws(function() {
			validators.isLength(0, 0, 'abc');
		});
	}
};
