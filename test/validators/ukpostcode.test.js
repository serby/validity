var isPostcode = require('../../validators/ukpostcode');

describe('Postcode Validation', function() {

	it('should correctly validates valid postcodes', function() {
		[
			'wd4 8rq',
			'wd4 8rq',
			'wd48 1rq',
			'wd48A 1rq',
			'wd1a 1rq',
			'EC1R 3AD',
			'WD48RQ'
		].forEach(function(value) {
			isPostcode(value).should.eql(true);
		});
	});

	it('should correctly returns false for invaild postcodes', function() {
		[
			'a',
			'',
			'12',
			'hp1 2n'
		].forEach(function(value) {
			isPostcode(value).should.eql(false);
		});
	});

});