import tap from "tap";
import {
  twelveTET,
} from "../../src/data/temperaments/twelveTET";
import { Bass } from "../../src/instruments/Bass";
import { Tuning } from "../../src/Tuning";

const A = twelveTET.getNoteFromID("A");
const As = twelveTET.getNoteFromID("A#");
const Bb = twelveTET.getNoteFromID("Bb");
const B = twelveTET.getNoteFromID("B");
const C = twelveTET.getNoteFromID("C");
const Cs = twelveTET.getNoteFromID("C#");
const Db = twelveTET.getNoteFromID("Db");
const D = twelveTET.getNoteFromID("D");
const Eb = twelveTET.getNoteFromID("Eb");
const E = twelveTET.getNoteFromID("E");
const F = twelveTET.getNoteFromID("F");
const Fs = twelveTET.getNoteFromID("F#");
const Gb = twelveTET.getNoteFromID("Gb");
const G = twelveTET.getNoteFromID("G");
const Gs = twelveTET.getNoteFromID("G#");
const Ab = twelveTET.getNoteFromID("Ab");

tap.test("class Bass -- init", function (t) {
  const defaultBass = new Bass(21, [E, A, D, G]);
  const fiveStringBass = new Bass(21, [B, E, A, D, G]);
  const sixStringBass = new Bass(21, [B, E, A, D, G, C]);

  t.ok(defaultBass);
  t.ok(fiveStringBass);
  t.ok(sixStringBass);

  t.same(defaultBass.getCommonTunings(), [
    new Tuning("bass", "standard", [E, A, D, G]),
    new Tuning("bass", "drop D", [D, A, D, G]),
    new Tuning("bass", "D-standard", [D, G, C, F]),
    new Tuning("bass", "drop C", [C, G, C, F]),
    new Tuning("bass", "tenor", [A, D, G, C]),
  ], 'common tunings found');

  t.same(fiveStringBass.getCommonTunings(), [
    new Tuning("bass (5 string)", "standard", [B, E, A, D, G]),
    new Tuning("bass (5 string)", "tenor", [E, A, D, G, C]),
  ], 'common tunings found - 5 string');

  t.same(sixStringBass.getCommonTunings(), [
    new Tuning("bass (6 string)", "standard", [B, E, A, D, G, C]),
  ], 'common tunings found - 6 string');

  t.same(defaultBass.getStandardTuning(), new Tuning('bass', 'standard', [E, A, D, G])
    , 'standard tuning found');

  t.same(fiveStringBass.getStandardTuning(), new Tuning('bass (5 string)', 'standard', [B, E, A, D, G])
  , 'standard tuning found - 5 string');

  t.same(sixStringBass.getStandardTuning(), new Tuning('bass (6 string)', 'standard', [B, E, A, D, G, C])
  , 'standard tuning found - 6 string');

  t.equal(defaultBass.fretBoard.courses.length, 4, "4 string has 4 courses");
  t.equal(fiveStringBass.fretBoard.courses.length, 5, "5 string has 5 courses");
  t.equal(sixStringBass.fretBoard.courses.length, 6, "6 string has 6 courses");
  t.equal(
    defaultBass.fretBoard.courses.every(course => course.tunedStrings.length === 1),
    true, 
    "4 string has all single strings"
  );
  t.equal(
    fiveStringBass.fretBoard.courses.every(course => course.tunedStrings.length === 1),
    true, 
    "5 string has all single strings"
  );
  t.equal(
    sixStringBass.fretBoard.courses.every(course => course.tunedStrings.length === 1),
    true, 
    "6 string has all single strings"
  );

  t.end();
});
