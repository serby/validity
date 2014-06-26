# validity - Validation framework

[![NPM Details](https://nodei.co/npm/validity.png?stars&downloads)](https://npmjs.org/package/validity)

[![build status](https://api.travis-ci.org/serby/validity.png)](http://travis-ci.org/serby/validity)

An extendible validation framework for validating the properties of an object. Also contains a number of standard validators.

## Installation

    npm install validity

## Run Tests

    npm test

## Validators

Validity comes with some very basic example validators (required, email, integer, length and a few others). No more validators
will be added to this repo (in fact some of the more obscure ones may be removed in future). They should be built as individual
npm modules (with their own tests) so that applications can pick and choose which they use. Validators should be added to npm
repo with the `validity-` prefix so that people can find them with a quick [npm search](https://npmjs.org/search?q=validity-)
(or via the cli: `npm search validity-`).

The are a few validators that currently exist and can be used for reference:

- [validity-alphanumeric-property](https://npmjs.org/package/validity-alphanumeric-property)
- [validity-date-before-property](https://npmjs.org/package/validity-date-before-property)
- [validity-date-in-range](https://npmjs.org/package/validity-date-in-range)
- [validity-entity-exists](https://npmjs.org/package/validity-entity-exists)
- [validity-number-in-range](https://npmjs.org/package/validity-number-in-range)
- [validity-payment-card-number](https://npmjs.org/package/validity-payment-card-number)
- [validity-unique-property](https://npmjs.org/package/validity-unique-property)
- [validity-url-optional-tlds](https://npmjs.org/package/validity-url-optional-tlds)
- [validity-regex-match](https://github.com/tomgco/validity-regex-match)
- [validity-string-represents-mongodb-objectid](https://github.com/tomgco/validity-string-represents-mongodb-objectid)
- [validity-validate-if-set](https://github.com/domharrington/validity-validate-if-set)
- [validity-validate-if-property-set](https://github.com/microadam/validity-validate-if-property-set)
- [validity-validate-if-property-equals](https://github.com/microadam/validity-validate-if-property-equals)

## Credits
[Paul Serby](https://github.com/serby/) follow me on twitter [@serby](http://twitter.com/serby)

## Licence
Licenced under the [New BSD License](http://opensource.org/licenses/bsd-license.php)
