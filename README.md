# validity - Validation framework

[![NPM Details](https://nodei.co/npm/validity.png?stars&downloads)](https://npmjs.org/package/validity)

[![build status](https://api.travis-ci.org/serby/validity.png)](http://travis-ci.org/serby/validity)

Validation helpers for validating the properties of an object.

## Change log

### Version 1

As of version 1 all validators have been stripped out and should be required individually as needed.

Validity now only consists of three helper functions that should  be used by
validator authors. You won't need to include validity directly into you projects
any longer unless you need to create a new validator.

## Installation

    npm install --save validity

## Run Tests

    npm test

## Usage

### Simple Boolean Return Validators

```js

var validity = require('validity')
  , createValidator = validity.createValidator
  , booleanToCallback = validity.booleanToCallback
  , requiredValidator
  , defaultMessageValidator

// The simple return boolean type validator we want to convert into a validity style
function isEven (value) {
  return value % 2 === 0
}

// Create the validator converting a simple boolean validation function
requiredValidator = createValidator(booleanToCallback(isEven))

// This sets the already composed validator with a default message
defaultMessageValidator = requiredValidator('#{name} is required')

// Tack a composed function onto the default validator function that allows you
// to change the default error message.
defaultMessageValidator.setFailureMessage = requiredValidator

module.exports = defaultMessageValidator

```

This can be wrapped up using the `createValidatorAllowingFailureMessageOverride` helper.

```js
var validity = require('validity')
  , requiredValidator = validity.createValidator(validity.booleanToCallback(isValid))

module.exports = validity.createValidatorAllowingFailureMessageOverride(requiredValidator, '#{name} is required')

```

## Unexpected Errors

The first argument of a validator callback should be null unless expected errors
outside of validation occurred. Errors such as IO errors or system errors should
be reported and dealt with internally. It may cause an security issue if details of such
errors are returned to the user.

## Validators

Validators should be built as individual npm modules so that applications can pick and
choose which they use. Validators should be added to npm repo with the
`validity-` prefix so they can be found with a quick [npm
search](https://npmjs.org/search?q=validity-) (or via the cli: `npm search
validity-`).

Validator authors should upgrade their validators to use the helper functions from
validity and allow easy overriding of failure messages.

Validators that currently exist and can be used:

- [validity-alphanumeric-property](https://www.npmjs.com/package/validity-alphanumeric-property)
- [validity-date-before-property](https://www.npmjs.com/package/validity-date-before-property)
- [validity-date-in-range](https://www.npmjs.com/package/validity-date-in-range)
- [validity-email *](https://www.npmjs.com/package/validity-email)
- [validity-entity-exists](https://www.npmjs.com/package/validity-entity-exists)
- [validity-equal-field](https://www.npmjs.com/package/validity-equal-field)
- [validity-equal](https://www.npmjs.com/package/validity-equal)
- [validity-float](https://www.npmjs.com/package/validity-float)
- [validity-integer *](https://www.npmjs.com/package/validity-integer)
- [validity-number-in-range *](https://www.npmjs.com/package/validity-number-in-range)
- [validity-number](https://www.npmjs.com/package/validity-number)
- [validity-payment-card-number](https://www.npmjs.com/package/validity-payment-card-number)
- [validity-regex-match](https://www.npmjs.com/package/validity-regex-match)
- [validity-require-one](https://www.npmjs.com/package/validity-require-one)
- [validity-required-options](https://www.npmjs.com/package/validity-required-options)
- [validity-required](https://www.npmjs.com/package/validity-required)
- [validity-string-represents-mongodb-objectid](https://www.npmjs.com/package/validity-string-represents-mongodb-objectid)
- [validity-ukpostcode](https://www.npmjs.com/package/validity-ukpostcode)
- [validity-unique-property](https://www.npmjs.com/package/validity-unique-property)
- [validity-url *](https://www.npmjs.com/package/validity-url)
- [validity-url-optional-tlds](https://www.npmjs.com/package/validity-url-optional-tlds)
- [validity-validate-each](https://www.npmjs.com/package/validity-validate-each)
- [validity-validate-if-property-equals](https://www.npmjs.com/package/validity-validate-if-property-equals)
- [validity-validate-if-property-set](https://www.npmjs.com/package/validity-validate-if-property-set)
- [validity-validate-if-set *](https://www.npmjs.com/package/validity-validate-if-set)

__* - These modules replace functionality previously found in validity pre version 1__

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## License

ISC
