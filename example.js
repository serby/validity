const validity = require('validity')
const createValidator = validity.createValidator
const booleanToCallback = validity.booleanToCallback

// The simple return boolean type validator we want to convert into a validity style
function isEven(value) {
  return value % 2 === 0
}

// Create the validator converting a simple boolean validation function
const requiredValidator = createValidator(booleanToCallback(isEven))

// This sets the already composed validator with a default message
const defaultMessageValidator = requiredValidator('#{name} is required')

// Tack a composed function onto the default validator function that allows you
// to change the default error message.
defaultMessageValidator.setFailureMessage = requiredValidator
module.exports = defaultMessageValidator

// or this can be wrapped up using this helper
module.exports = validity.createValidatorAllowingFailureMessageOverride(
  booleanToCallback(isEven),
  '#{name} is required'
)
