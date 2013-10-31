var propertyValidator = require('../property-validator')
  , should = require('should')

function isValue(key, object, callback) {
  callback(undefined, object[key])
}

describe('property-validator', function() {

  it('should return undefined when on successful validated', function() {
    var validate = propertyValidator(isValue)
    validate('a', 'a', { a:true }, function(error, valid) {
      should.not.exist(valid)
    })
  })

  it('should return error message if unsuccessful validated', function() {
    var validate = propertyValidator(isValue)
    validate('a', 'z', { a:false }, function(error, valid) {
      valid.should.eql('z is not valid')
    })
  })

  it('should return custom error message if defined', function() {
    var validate = propertyValidator(isValue)
    validate.setFailureMessage('BAD LUCK!')
    validate('a', 'z', { a:false }, function(error, valid) {
      valid.should.eql('BAD LUCK!')
    })
  })
})