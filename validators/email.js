/**
 * Validates that value is the correct form for an email address.
 *
 * I've taken the email regex from http://github.com/chriso/node-validator
 *
 * @param {String} value Email to validate
 * @return {Boolean} True if value is a valid for of email address
 */
module.exports = function(value) {
	console.warn('Email validator deprecated. This will be removed in the next major version.')
  /* jshint maxlen: false */
	return (/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/).test(value)
}
