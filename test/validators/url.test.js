var isUrl = require('../../validators/url');

describe('URL Validation', function() {

	it('should correctly validate valid URLs', function() {
		[
			'http://www.google.com',
			'https://www.google.com',
			'http://google.com',
			'https://google.com',
			'http://asddasads.google.com',
			'http://asddasads.google.com/asddasads',
			'http://asddasads.google.com/asddasads/asdass',
			'http://asddasads.google.com/asddasads/asdass#'
		].forEach(function(value) {
			isUrl(value).should.eql(true);
		});
	});

	it('should correctly return false for invaild URLs', function() {
		[
			'google.com',
			'sfsdfsd',
			'http://',
			'www.fred.com'
		].forEach(function(value) {
			isUrl(value).should.eql(false);
		});
	});

});