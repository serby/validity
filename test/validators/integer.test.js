var
	validators = require('../..').validators,
	assert = require('assert');

module.exports = {
	'integer Numbers are integers': function() {
		assert.strictEqual(validators.isInteger(1), true);
	},
	'integer Strings are integers': function() {
		assert.strictEqual(validators.isInteger('1'), true);
	},
	'integer Numbers with trailing zero decimals are integers': function() {
		assert.strictEqual(validators.isInteger(1.0), true);
	},
	'negative integer Numbers are integers': function() {
		assert.strictEqual(validators.isInteger(-1), true);
	},
	'negative integer strings are integers': function() {
		assert.strictEqual(validators.isInteger('-1'), true);
	},
	'real Numbers are not integer': function() {
		assert.strictEqual(validators.isInteger(1.1), false);
	},
	'real Strings are not integer': function() {
		assert.strictEqual(validators.isInteger('1.1'), false);
	},
	'strings are not integers': function() {
		assert.strictEqual(validators.isInteger('hello'), false);
	},
	'objects are not integers': function() {
		assert.strictEqual(validators.isInteger({}), false);
	},
	'arrays are not integers': function() {
		assert.strictEqual(validators.isInteger([1]), true);
	},
	'booleans are not integers': function() {
		assert.strictEqual(validators.isInteger(true), true);
	}
};
