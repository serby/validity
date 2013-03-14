var isRequired = require('../../validators/required');

describe('Required Validation', function() {

	it('should return false for null value', function() {
		isRequired(null).should.equal(false)
	});

	it('should return false for undefined value', function() {
		isRequired(undefined).should.equal(false)
	});

	it('should return false for empty string', function() {
		isRequired('').should.equal(false)
	});

	it('should return true for true', function() {
		isRequired(true).should.equal(true)
	});

	it('should return true for non empty string', function() {
		isRequired('abc').should.equal(true)
	});

	it('should return true for number', function() {
		isRequired(123).should.equal(true)
	});

	it('should return true for non empty array', function() {
		isRequired([1, 2, 3]).should.equal(true)
	});

	it('should return false for empty array', function() {
		isRequired([]).should.equal(false)
	});

	it('should return true for non empty object', function() {
		isRequired({foo: 'bar'}).should.equal(true)
	});

	it('should return false for empty object', function() {
		isRequired({}).should.equal(false)
	});

	it('should return true for date', function() {
		isRequired(new Date()).should.equal(true)
	});

});