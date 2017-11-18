/**
 * Module dependencies.
 */
var irssn = require('./lib');


console.log('Total cities in the database are: ' + Object.keys(irssn.cities).length);

var result = irssn.validate('0123456789');
console.log(result);

result = irssn.validate('3546461218');
console.log(result);
