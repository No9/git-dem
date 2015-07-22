var assert = require('assert')
var mod = require('./module')

assert.equal(42, mod(), 'what is 6 * 7?')
assert.ok('This was good')
console.log('complete')
