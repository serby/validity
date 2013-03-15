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
			'http://asddasads.google.com/asddasads/asdass#',
			'http://asddasads.google.com/asddasads/asdass?a=b',
			'http://asddasads.google.com/asddasads/asdass?a=b#asdasd',
			'http://a.co',
			'http://user:password@a.com',
			'http://user:password@a.com?f=b&b=a',
			'http://user:password@www.a.com?f=b&b=a',
			'http://user:password@www.a.a.a.a.a.a.a.a.a.a.a.a.com/mypage.html?f=b&b=a#',
		].forEach(function(value) {
			isUrl(value).should.eql(true);
		});
	});

	it('should correctly return false for invaild URLs', function() {
		[
			'google.com',
			'sfsdfsd',
			'http://',
			'www.fred.com',
			'google.com/asddasads/asdass?a=b#asdasd',
			null,
			undefined,
			'',
			new Date(),
			1,
			'1'
		].forEach(function(value) {
			isUrl(value).should.eql(false);
		});
	});

});