var isEmail = require('../../validators/email');

describe('Email Validation', function() {

	it('should correctly validates valid email addresses', function() {
		[
			'paul@serby.net',
			'paul.serby@clock.co.uk',
			'test-paul@serby.net',
			'paul+serby@clock.co.uk',
			'paul\'s-house@serby.net'
		].forEach(function(value) {
			isEmail(value).should.eql(true);
		});
	});

	it('should correctly returns false for invaild email addresses', function() {
		[
			'@serby.net',
			'paul.serby@clock',
			'test-paul@serby.',
			'paul.serby.clock.co.uk'
		].forEach(function(value) {
			isEmail(value).should.eql(false);
		});
	});

});