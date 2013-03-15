var isLength = require('../../validators/length');

describe('Length Validation', function() {

	it('should return true for length in middle of range', function() {
		isLength(1, 10, '12345').should.equal(true)
	});

	it('should return true for length at min', function() {
		isLength(1, 10, '1').should.equal(true)
	});

	it('should return true for length at max', function() {
		isLength(1, 10, '1234567890').should.equal(true)
	});

	it('should return false for length at max + 1', function() {
		isLength(1, 10, '12345678901').should.equal(false)
	});

	it('should return false for length at min - 1', function() {
		isLength(2, 10, 'a').should.equal(false)
	});

	it('should return true when value is empty string and min is zero', function() {
		isLength(0, 10, '').should.equal(true)
	});

	it('should return false when value is empty string and min is not zero', function() {
		isLength(1, 10, '').should.equal(false)
	});

	it('should return true when value is undefined and min is zero', function() {
		isLength(0, 10, undefined).should.equal(true)
	});

	it('should return false when value is undefined and min is not zero', function() {
		isLength(1, 10, undefined).should.equal(false)
	});

	it('should return true when value is null and min is zero', function() {
		isLength(0, 10, null).should.equal(true)
	});

	it('should return false when value is null and min is not zero', function() {
		isLength(1, 10, null).should.equal(false)
	});

});
