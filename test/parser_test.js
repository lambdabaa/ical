var parser = require('../lib/parser');

suite('parser', function() {
  test('basic', function() {
    var line = parser.parse('BEGIN:VCALENDAR\n');
  });
});
