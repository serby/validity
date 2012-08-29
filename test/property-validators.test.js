var validity = require('..')
  , should = require('should')
  ;

describe('property-validators', function() {
  describe('email', function() {
    it('should not return error for valid email address', function(done) {
      validity.email('homeEmail', 'Home Email Address', { homeEmail:'paul.serby@clock.co.uk' }, function(error, valid) {
        should.not.exist(valid);
        done();
      });
    });

    it('should return correct error message for invalid email address', function(done) {
      validity.email('homeEmail', 'Home Email Address', { homeEmail:'paul.serby.clock.co.uk' }, function(error, valid) {
        valid.should.eql('Home Email Address must be a valid email address');
        done();
      });
    });

  });


  describe('required', function() {
    it('should not return error for provided property', function(done) {
      validity.required('age', 'Age', { age: 1 }, function(error, valid) {
        should.not.exist(valid);
        done();
      });
    });

    it('should return correct error message for missing property', function(done) {
      validity.required('age', 'Age', { age: '' }, function(error, valid) {
        valid.should.eql('Age is required');
        done();
      });
    });
  });

  describe('integer', function() {
    it('should not return error for valid integer', function(done) {
      validity.integer('age', 'Age', { age: 1 }, function(error, valid) {
        should.not.exist(valid);
        done();
      });
    });

    it('should return correct error message for invalid integer', function(done) {
      validity.integer('age', 'Age', { age: 1.1 }, function(error, valid) {
        valid.should.eql('Age must be an integer');
        done();
      });
    });
  });

});