var
	validators = require('../..').validators,
	assert = require('assert');

module.exports = {
	'null returns false': function() {
		assert.strictEqual(validators.isRequired(null), false);
	},
	'undefined returns false': function() {
		assert.strictEqual(validators.isRequired(), false);
	},
	'empty string returns false': function() {
		assert.strictEqual(validators.isRequired(''), false);
	},
	'true returns true': function() {
		assert.strictEqual(validators.isRequired(true), true);
	},
	'string returns true': function() {
		assert.strictEqual(validators.isRequired('abc'), true);
	},
	'number returns true': function() {
		assert.strictEqual(validators.isRequired(123), true);
	},
	'populated array returns true': function() {
		assert.strictEqual(validators.isRequired([1,2,3]), true);
	},
	'empty array returns false': function() {
		assert.strictEqual(validators.isRequired([]), false);
	},
	'populated object returns true': function() {
		assert.strictEqual(validators.isRequired({ foo: 'bar' }), true);
	},
	'empty object returns false': function() {
		assert.strictEqual(validators.isRequired({}), false);
	}
};
