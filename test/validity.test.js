const validity = require('..')
  , assert = require('assert')

function isValue (key, object, callback) {
  callback(null, object[key])
}

function alwaysFail (key, object, callback) {
  callback(null, false)
}

function isValueWithExpectedError (key, object, callback) {
  callback(new Error('Something really bad happened'), 'Unexpected error')
}

describe('validity', function () {

  describe('#booleanToCallback()', function () {
    it('should return a function', function () {
      assert.equal(typeof validity.booleanToCallback, 'function')
    })

    it('should correctly wrap a boolean function: true', function (done) {
      validity.booleanToCallback(Number.isInteger)('age', { age: 1 }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, true)
        done()
      })
    })

    it('should correctly wrap a boolean function: false ', function (done) {
      validity.booleanToCallback(Number.isInteger)('age', { age: 'a' }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, false)
        done()
      })
    })
  })

  describe('#createValidator()', function () {

    it('should return undefined when on successful validated', function (done) {
      const validate = validity.createValidator(isValue)('#{name} is not valid')
      validate('a', 'a', { a: true }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, undefined)
        done(error)
      })
    })

    it('should return custom failure message when invalid', function (done) {
      const validate = validity.createValidator(isValue)('#{name} is not valid')
      validate('a', 'z', { a: false }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, 'z is not valid')
        done(error)
      })
    })

    it('should return custom failure message injecting #{name} and #{value}', function (done) {
      const validate = validity
        .createValidator(alwaysFail)('An #{name} with a value of #{value}, is not valid')
      validate('email', 'email', { email: 'paul@serby.net' }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, 'An email with a value of paul@serby.net, is not valid')
        done(error)
      })
    })

    it('should return error message an unexpected error occurred', function (done) {
      const validate = validity.createValidator(isValueWithExpectedError)('#{name} is not valid')
      validate('a', 'z', { a: false }, function (error, valid) {
        assert(error instanceof Error)
        assert.equal(valid, 'Unexpected error')
        done()
      })
    })
  })

  describe('#createValidatorAllowingFailureMessageOverride()', function () {

    it('should return undefined when on successful validated', function (done) {
      const validate = validity.createValidatorAllowingFailureMessageOverride(isValue, '#{name} is not valid')
      validate('a', 'a', { a: true }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, undefined)
        done(error)
      })
    })

    it('should return validation error message if unsuccessful validated', function (done) {
      const validate = validity.createValidatorAllowingFailureMessageOverride(isValue, '#{name} is not valid')
      validate('a', 'z', { a: false }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, 'z is not valid')
        done(error)
      })
    })

    it('should all the failure message to be set', function (done) {
      const validate = validity.createValidatorAllowingFailureMessageOverride(isValue, '#{name} is not valid')
      validate.setFailureMessage('You need a name #{name}')('a', 'z', { a: false }, function (error, valid) {
        assert.equal(error, null)
        assert.equal(valid, 'You need a name z')
        done(error)
      })
    })

  })
})
