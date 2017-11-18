/**
 * Module dependencies.
 */
var cities = require('./data/cities.json');


var validate = function (ssn, log) {
	if (log === undefined) {
		log = false;
	}

	if (ssn == undefined || ssn == 'undefined' || ssn == '') {
		log && console.log('Invalid property');
		return false;
	}
	if (typeof ssn != 'string') {
		log && console.log('Code not provided');
		return false;
	}

	if (ssn == '0123456789') {
		log && console.log('SSN is not valid.');
		return false;
	}

	ssn = ssn.trim();
	if (ssn.length !== 10) { // alternative is !/^\d{10}$/.test(input)
		log && console.log('Invalid code length');
		return false;
	}

	var check = parseInt(ssn[9]);
	var sum = 0;
	for (var i = 0; i < 9; i++) {
		sum += parseInt(ssn[i]) * (10 - i);
	}
	sum %= 11;

	return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
};

/**
 * Export cities database.
 */
module.exports.cities = exports.cities = cities;

/**
 * Expose `validate`.
 */
module.exports.validate = exports.validate = validate;
