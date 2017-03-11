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
	if (ssn.length !== 10) {
		log && console.log('Invalid code length');
		return false;
	}

	var sum = 0;
	for (var i = 0; i < 10; i++) {
		sum += parseInt(ssn.charAt(i)) * (10 - i);
	};
	var a = parseInt(ssn.charAt(0));
	var c = sum - parseInt(sum / 11) * 11;
	var city_code = ssn.substr(0, 3);

	if ((c < 2 && a == c) || (c > 1 && a == 11 - c)) {
		var city_data = cities[city_code];
		var data = {};
		data.status = true;
		data.ssn = ssn;
		data.city_code = city_code;
		data.city = city_data.city;
		data.state = city_data.state;
		return data;
	} else {
		log && console.log('SSN is not valid.');
		return false;
	}
};

/**
 * Export cities database.
 */
module.exports.cities = exports.cities = cities;

/**
 * Expose `validate`.
 */
module.exports.validate = exports.validate = validate;
