Iranian-SSN
===========

Iranian-SSN lets you validate iranian national code. It checks the code and returns the result as json.

## Install

    $ npm install iranian-ssn

## Usage

#### Validation

User `.validate(ssn, log = false)` to validate your national code.

    var result = irssn.validate(ssn);
    console.log(result);

    result = irssn.validate(ssn, true);
    console.log(result);

    # => {"status"=>true, "ssn"=>"#ssn", "city_code"=>"044", "city"=>"شمیران", "state"=>"تهران"}
    # => false

#### Cities Database

Use `.cities` to access our cities database.

    var cities = irssn.cities;

## Examples

For a complete, working example, refer to the [example](https://github.com/rghorbani/node-iranian-ssn/tree/master/test.js).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Reza Ghorbani Farid](http://github.com/rghorbani)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015-present Reza Ghorbani Farid <[http://rghorbani.ir](http://rghorbani.ir)>
