/**
 * Module dependencies.
 */
var irssn = require('../');


console.log('Total cities in the database are: ' + Object.keys(irssn.cities).length);

irssn.validate('0123456789', function (err, result) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(result);
});

irssn.validate('3546461218', function (err, result) {
	if (err) {
		console.log(err);
		return;
	}

	console.log(result);
});