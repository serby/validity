var isInteger = require('../../validators/integer');

describe('Integer Validation', function() {

	it('should return true for valid Integer', function() {
		isInteger(1).should.equal(true)
	});

	it('should return true for valid String Integer', function() {
		isInteger('1').should.equal(true)
	});

	it('should return true for valid Integer with zero decimal', function() {
		isInteger(1.0).should.equal(true)
	});

	it('should return true for negative Integer', function() {
		isInteger(-1).should.equal(true)
	});

	it('should return true for negative String Integer', function() {
		isInteger('-1').should.equal(true)
	});

	it('should return false for real numbers', function() {
		isInteger(1.1).should.equal(false)
	});

	it('should return false for string real numbers', function() {
		isInteger('1.1').should.equal(false)
	});

	it('should return false for strings', function() {
		isInteger('hello').should.equal(false)
	});

	it('should return false for objects', function() {
		isInteger({}).should.equal(false)
	});

	it('should return false for arrays with 1 integer inside', function() {
		isInteger([1]).should.equal(false)
	});

	it('should return false for booleans', function() {
		isInteger(true).should.equal(false)
	});

});
