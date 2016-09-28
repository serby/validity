function booleanToCallback (fn) {
  return function (propertyName, object, callback) {
    callback(null, fn(object[propertyName]))
  }
}

function createValidator (asyncValidateFn) {
  return function (failureMessage) {
    return function validate (propertyName, readablePropertyName, object, callback) {
      asyncValidateFn(propertyName, object, function (error, valid) {
        if (error) return callback(error, 'Unexpected error')
        callback(error, valid ? undefined : failureMessage.replace(/#\{name\}/g, readablePropertyName))
      })
    }
  }
}

function createValidatorAllowingFailureMessageOverride (asyncValidateFn, defaultFailureMessage) {
  const validator = createValidator(asyncValidateFn)
    , defaultMessageValidator = validator(defaultFailureMessage)

  defaultMessageValidator.setFailureMessage = validator
  return defaultMessageValidator
}

module.exports.booleanToCallback = booleanToCallback
module.exports.createValidator = createValidator
module.exports.createValidatorAllowingFailureMessageOverride = createValidatorAllowingFailureMessageOverride
