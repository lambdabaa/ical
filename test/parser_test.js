var assert = require('chai').assert,
    fs = require('fs'),
    parser = require('../lib/parser');

suite('parser', function() {
  [
    'basic'
  ].forEach(function(name) {
    test(name, function() {
      var ical = parser.parse(
        fs.readFileSync(__dirname + '/fixtures/' + name + '.ics', {
          encoding: 'utf8'
        })
      );


      assert.deepEqual(ical, require('./fixtures/' + name));
    });
  });
});
