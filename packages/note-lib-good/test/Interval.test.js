const tap = require('tap');
const Interval = require('../src/Interval');

tap.test('class Interval', function (t) {
  const interval = new Interval(0, [
    { name: 'perfect', long: 'Perfect unison', short: 'P1' },
    { name: 'diminished', long: 'Diminished second', short: 'd2' },
    { name: 'root', short: 'R' }
  ]);

  t.same(interval.toJSON(), {
    semitones: 0,
    aliases: {
      perfect: { name: 'perfect', long: 'Perfect unison', short: 'P1' },
      diminished: { name: 'diminished', long: 'Diminished second', short: 'd2' },
      root: { name: 'root', short: 'R' }
    }
  }, 'JSON should be correct');

  t.equal(interval.valueOf(), JSON.stringify(interval));
  t.equal(interval.toString(), JSON.stringify(interval));

  t.equal(interval.isPerfect(), true);
  t.equal(interval.isDiminished(), true);
  t.equal(interval.isAugmented(), false);
  t.equal(interval.isMajor(), false);
  t.equal(interval.isMinor(), false);

  t.end();
})
