var propertyValidator = require('./property-validator')
  ;

function booleanToCallback(fn) {
  return function(propertyName, object, callback) {
    callback(undefined, fn(object[propertyName]));
  };
}

module.exports = {
  email: propertyValidator(
    booleanToCallback(require('./validators/email')),
    '#{name} must be a valid email address'),

  required: propertyValidator(
    booleanToCallback(require('./validators/required')),
    '#{name} is required'),

  customRequired: function(failureMessage) { return propertyValidator(
    booleanToCallback(require('./validators/required')), failureMessage); },

  ukpostcode: propertyValidator(booleanToCallback(
    require('./validators/ukpostcode')),
    '#{name} must be a valid UK postcode'),

  length: function(min, max) {
    return propertyValidator(
      booleanToCallback(
      require('./validators/length').bind(this, min, max)),
      '#{name} must be between ' + min + ' and ' + max + ' in length');
  },

  integer: propertyValidator(
      booleanToCallback(
      require('./validators/integer')),
      '#{name} must be an integer'),

  booleanToCallback: booleanToCallback
};