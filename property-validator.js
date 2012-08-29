/**
 * Paul Serby <paul.serby@clock.co.uk>
 *
 * New BSD Licensed
 *
 * Sunday 26 June 2011
 */

/**
 * Builds custom validation message by taking a validator and a failure message.
 * The values can be passed for evaluation, if the validator fails the failure
 * message is returned, often with the property name injected into the message.
 * This allows one PropertyValidator to validate multiple properties giving the
 * same failure message for each but with the correct property name in the error.
 *
 * This is mainly of use as part of form validation. A typical use-case would be
 * to create one PropertyValidator with a Postcode validator that is used for both
 * delivery and billing postcode.
 *
 * @param {Function} validator Validation function take a value to validate and returns a boolean
 * @param {String} message Message to display on error
 * @return {Function} The validator with a setFailMessage function hanging off of it
 */
module.exports = function(validator, failureMessage) {

  if (typeof validator !== 'function') {
    throw new TypeError('validator should be a function not a ' + typeof validator);
  }

  /**
   * Validate the given value on failure returns the failure message replacing #{name} with the property name.
   *
   * @param {String} propertyName Which property of the object to validate
   * @param {String} errorName Used for error reporting
   * @param {Mixed} object The object to validate
   * @param {Function} callback Called once the property is validated. Will return callback(error) with a new Error
   * containing the message if validation fails.
   */
  function validate(propertyName, errorName, object, callback) {
    validator(propertyName, object, function(error, valid, customMessage) {
      var message = customMessage || failureMessage || '#{name} is not valid';
      callback(error, valid ? undefined : message.replace(/#\{name\}/g, errorName));
    });
  }

  /**
   * Set a custom failure message
   *
   * @param {String} message The custom failure message
   */
  function setFailureMessage (message) {
    failureMessage = message;
  }

  validate.setFailureMessage = setFailureMessage;

  return validate;
};