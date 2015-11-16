/**
 * Module dependencies.
 */
var cities = require('./data/cities.json');


var validate = function (ssn, callback) {
	if (ssn == undefined || ssn == 'undefined' || ssn == '') {
		return callback(new Error('Invalid property'));
	}
	if (typeof ssn != 'string') {
		return callback(new Error('Code not provided'));
	}

	if (ssn == '0123456789') {
		return callback(null, {status: false, erorr: 'SSN is not valid.'});
	}

	ssn = ssn.trim();
	if (ssn.length != 10) {
		return callback(new Error('Invalid code length'));
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
		return callback(null, data);
	} else {
		return callback(null, {status: false, erorr: 'SSN is not valid.'})
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

