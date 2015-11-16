Iranian-SSN
===========

Iranian-SSN lets you validate iranian national code. It checks the code and returns the result as json.

## Install

    $ npm install iranian-ssn

## Usage

#### Validation

User `.validate(ssn, [Function])` to validate your national code.

    irssn.validate(ssn, function (err, result) {
      if (err) {
        console.error(err);
        return;
      }

      if (result.status) {
        console.log("State is: ", result.state);
        console.log("City is: ", result.city_code, result.city);
      } else {
        console.log(result.error);
      }
    });

    # => {"valid"=>true, "ssn"=>"#ssn", "city_code"=>"044", "city"=>"شمیران", "state"=>"تهران"}
    # => {"valid"=>false, "erorr"=>"SSN is not valid."}

#### Cities Database

Use `.cities` to access our cities database.

    var cities = irssn.cities;

## Examples

For a complete, working example, refer to the [example](https://github.com/jaredhanson/passport-facebook/tree/master/examples).

## Tests

    $ npm install
    $ npm test

## Credits

  - [Reza Ghorbani Farid](http://github.com/rghorbani)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Reza Ghorbani Farid <[http://rghorbani.ir](http://rghorbani.ir)>
