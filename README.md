Iranian-SSN
===========

[![npm](https://img.shields.io/npm/v/iranian-ssn.svg?style=flat-square)](https://www.npmjs.com/package/iranian-ssn)

Iranian-SSN lets you validate iranian national code. It checks the code and returns the result as json.

## Install

    $ npm install iranian-ssn --save

OR

    $ yarn add iranian-ssn

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
Unfortunately there is no public official db of city codes and there was typos in unofficial ones.
I tried my best to detect typos by both comparing all of them and user comments.
Here is the list of discovered references:

- [yasa.co](https://www.yasa.co/%D8%A7%D8%AF%D8%A7%D8%B1%D9%87-%D8%AB%D8%A8%D8%AA-%D8%A7%D8%AD%D9%88%D8%A7%D9%84/%DA%A9%D8%AF-%D9%85%D9%84%DB%8C-%D9%88-%D8%B4%D9%87%D8%B1-%D9%85%D8%AD%D9%84-%D8%B5%D8%AF%D9%88%D8%B1-%D8%A2%D9%86-%D8%B4%D9%87%D8%B1-%D9%85%D8%AD%D9%84-%D8%AA%D9%88%D9%84%D8%AF)

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
