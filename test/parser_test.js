var assert = require('chai').assert,
    fs = require('fs'),
    parser = require('../lib/parser');

suite('parser', function() {
  fs.readdirSync(__dirname + '/fixtures')
  .filter(function(filename) {
    return filename.substring(filename.length - 4) === '.ics';
  })
  .map(function(filename) {
    return filename.substring(0, filename.length - 4);
  })
  .forEach(function(name) {
    test(name, function() {
      var ical = parser.parse(
        fs.readFileSync(__dirname + '/fixtures/' + name + '.ics', {
          encoding: 'utf8'
        })
      );
      var expected = require('./fixtures/' + name);
      assert.deepEqual(ical, expected);
    });
  });
});
