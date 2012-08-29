var
	validators = require('../..').validators,
	assert = require('assert');

module.exports = {
	'Correctly validates valid UK postcodes': function(data) {
		[
			'wd4 8rq',
			'wd4 8rq',
			'wd48 1rq',
			'wd48A 1rq',
			'wd1a 1rq',
			'EC1R 3AD',
			'WD48RQ'
		].forEach(function(value) {
			assert.ok(validators.isUKPostcode(value), '\'' + value + '\' is a valid UK postcode and should pass');
		});
	},
	'Correctly returns false for invaild UK postcodes': function(data) {
		[
			'a',
			'',
			'12',
			'hp1 2n'
		].forEach(function(value) {
			assert.equal(validators.isUKPostcode(value), false, '\'' + value + '\' is not a valid UK postcode and should fail');
		});
	}
};
