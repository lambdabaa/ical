import { assert } from 'chai';
import fs from 'fs';
import { endsWith } from 'lodash';

import { parser }  from '../ical';

suite('parser', function() {
  fs.readdirSync(__dirname + '/fixtures')
  .filter(filename => filename.endsWith('.ics'))
  .map(filename => filename.substring(0, filename.length - 4))
  .forEach(name => {
    test(name, function() {
      let ics = fs.readFileSync(
        `${__dirname}/fixtures/${name}.ics`,
        { encoding: 'utf8' }
      );

      let expected = require(`./fixtures/${name}`);
      assert.deepEqual(parser.parse(ics), expected);
    });
  });
});
