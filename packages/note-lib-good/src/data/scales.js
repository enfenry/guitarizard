const Scale = require('../Scale')
const diatonic = require('./scaleSystem/diatonic');

module.exports = [
  new Scale('aeolian', diatonic, [0,2,3,5,7,8,10,12]),

  // new Scale('algerian', diatonic, [0,2,3,5,6,7,8,11,12]),
  // algerian scale is super funky changes based on octave -- more accurately [0,2,3,6,7,8,11,12,14,15,17,19,20,23,24]

  new Scale('altered', diatonic, [0,1,3,4,6,8,10,12]),

  // new Scale('arabian (a)', diatonic, [0,2,3,5,6,8,9,11,12]),
  // arabian (a) wasn't found

  // new Scale('arabian (b)', diatonic, [0,2,4,5,6,8,10,12]),
  // arabian (b) is the same as major locrian

  new Scale('augmented', diatonic, [0,3,4,7,8,11,12]),

  // new Scale('auxiliary augmented', diatonic, [0,2,4,6,8,10,12]),
  // auxiliary augment AKA Lydian auxiliary augmented AKA whole tone

  new Scale('auxiliary diminished', diatonic, [0,2,3,5,6,8,9,11,12]),
  new Scale('auxiliary diminished blues', diatonic, [0,1,3,4,6,7,9,10,12]),

  new Scale('balinese', diatonic, [0,1,3,7,8,12]),
  new Scale('bebop dominant', diatonic, [0,2,4,5,7,9,10,11,12]),

  new Scale('bebop half diminished', diatonic, [0,1,3,5,6,7,8,11,12]),
  // bebop half diminished AKA Phrygiolocrian MAYBE??

  new Scale('bebop major', diatonic, [0,2,4,5,7,8,9,11,12]),

  new Scale('bebop minor', diatonic, [0,2,3,4,5,7,9,10,12]),
  // bebop minor AKA bebop Dorian

  new Scale('bebop minor 2', diatonic, [0,2,3,5,7,9,10,11,12]),
  // bebop minor 2 AKA bebop Dorian second or alternate form

  new Scale('blues', diatonic, [0,3,5,6,7,10,12]),
  // AKA pentatonic blues

  new Scale('blues variation 1', diatonic, [0,3,5,6,7,10,11,12]),
  new Scale('blues variation 2', diatonic, [0,3,4,5,6,7,10,11,12]),
  new Scale('blues variation 3', diatonic, [0,3,4,5,6,7,9,10,11,12]),

  new Scale('byzantine', diatonic, [0,1,4,5,7,8,11,12]),
  // byzantine AKA double harmonic major

  new Scale('chinese', diatonic, [0,4,6,7,11,12]),
  new Scale('chinese 2', diatonic, [0,2,5,7,9,12]),

  // new Scale('chinese mongolian', diatonic, [0,2,4,7,9,12]),
  // chinese mongolian AKA mongolian AKA diatonic

  new Scale('chromatic', diatonic, [0,1,2,3,4,5,6,7,8,9,10,11,12]),

  new Scale('diatonic', diatonic, [0,2,4,7,9,12]),
  // diatonic AKA chinese mongolian AKA mongolian

  new Scale('diminished', diatonic, [0,2,3,5,6,8,9,11,12]),
  // diminished AKA diminished minor

  // new Scale('diminished sevenths', diatonic, [0,3,6,9,12]),
  // diminished sevenths scale not found

  new Scale('diminished half/whole', diatonic, [0,1,3,4,6,7,9,10,12]),
  // diminished half/whole AKA diminished half

  new Scale('diminished, whole/half', diatonic, [0,2,3,5,6,8,9,11,12]),

  new Scale('dominant pentatonic', diatonic, [0,2,4,7,10,12]),

  new Scale('dorian', diatonic, [0,2,3,5,7,9,10,12]),

  new Scale('double harmonic', diatonic, [0,1,4,5,7,8,11,12]),
  // double Harmonic AKA byzantine

  // STOPPED BEFORE egyptian
  new Scale('egyptian', diatonic, [0,2,5,7,10,12]),
  new Scale('eight tone spanish', diatonic, [0,1,3,4,5,6,8,10,12]),
  new Scale('enigmatic', diatonic, [0,1,4,6,8,10,11,12]),
  new Scale('ethiopian (a raray)', diatonic, [0,2,4,5,7,9,11,12]),
  new Scale('ethiopian (geez & ezel)', diatonic, [0,2,3,5,7,8,10,12]),
  new Scale('half diminished #2 (locrian #2)', diatonic, [0,2,3,5,6,8,10,12]),
  new Scale('half diminished (locrian)', diatonic, [0,1,3,5,6,8,10,12]),
  new Scale('harmonic minor', diatonic, [0,2,3,5,7,8,11,12]),
  new Scale('hawaiian', diatonic, [0,2,3,5,7,9,11,12]),
  new Scale('hindu', diatonic, [0,2,4,5,7,8,10,12]),
  new Scale('hirajoshi', diatonic, [0,2,3,7,8,12]),
  new Scale('hirajoshi 2', diatonic, [0,4,5,9,11,12]),
  new Scale('hungarian gypsy', diatonic, [0,2,3,6,7,8,11,12]),
  new Scale('hungarian gypsy persian', diatonic, [0,1,4,5,7,8,11,12]),
  new Scale('hungarian major', diatonic, [0,3,4,6,7,9,10,12]),
  new Scale('hungarian minor', diatonic, [0,2,3,6,7,8,11,12]),
  new Scale('ionian', diatonic, [0,2,4,5,7,9,11,12]),
  new Scale('ionian #5', diatonic, [0,2,4,5,8,9,11,12]),
  new Scale('iwato', diatonic, [0,1,5,6,10,12]),
  new Scale('japanese (a)', diatonic, [0,1,5,7,8,12]),
  new Scale('japanese (b)', diatonic, [0,2,5,7,8,12]),
  new Scale('japanese (ichikosucho)', diatonic, [0,2,4,5,6,7,9,11,12]),
  new Scale('japanese (insen)', diatonic, [0,1,5,7,10,12]),
  new Scale('japanese (taishikicho)', diatonic, [0,2,4,5,6,7,9,10,11,12]),
  new Scale('javanese', diatonic, [0,1,3,5,7,9,10,12]),
  new Scale('jewish (adonai malakh)', diatonic, [0,1,2,3,5,7,9,10,12]),
  new Scale('jewish (ahaba rabba)', diatonic, [0,1,4,5,7,8,10,12]),
  new Scale('jewish (magen abot)', diatonic, [0,1,3,4,6,8,10,11,12]),
  new Scale('kumoi', diatonic, [0,2,3,7,9,12]),
  new Scale('kumoi 2', diatonic, [0,1,5,7,8,12]),
  new Scale('leading whole tone', diatonic, [0,2,4,6,8,10,11,12]),
  new Scale('locrian', diatonic, [0,1,3,5,6,8,10,12]),
  new Scale('locrian 6', diatonic, [0,1,3,5,6,9,10,12]),
  new Scale('lydian', diatonic, [0,2,4,6,7,9,11,12]),
  new Scale('lydian #2', diatonic, [0,3,4,6,7,9,11,12]),
  new Scale('lydian augmented', diatonic, [0,2,4,6,8,9,11,12]),
  new Scale('lydian diminished', diatonic, [0,2,3,6,7,9,11,12]),
  new Scale('lydian minor', diatonic, [0,2,4,6,7,8,10,12]),
  new Scale('major', diatonic, [0,2,4,5,7,9,11,12]),
  new Scale('major arpeggio', diatonic, [0,4,7,12]),
  new Scale('major blues', diatonic, [0,2,3,4,7,9,12]),
  new Scale('major locrian', diatonic, [0,2,4,5,6,8,10,12]),
  // major locrian AKA arabian (b)?

  new Scale('melodic minor ascending', diatonic, [0,2,3,5,7,9,11,12]),
  new Scale('melodic minor descending', diatonic, [0,2,3,5,7,8,10,12]),
  new Scale('minor', diatonic, [0,2,3,5,7,8,10,12]),
  new Scale('minor arpeggio', diatonic, [0,3,7,12]),
  new Scale('mixo-blues', diatonic, [0,3,4,5,6,7,10,12]),
  new Scale('mixolydian', diatonic, [0,2,4,5,7,9,10,12]),
  new Scale('mohammedan', diatonic, [0,2,3,5,7,8,11,12]),
  new Scale('moorish phrygian', diatonic, [0,1,3,4,5,7,8,10,11,12]),
  new Scale('neopolitan', diatonic, [0,1,3,5,7,8,11,12]),
  new Scale('neopolitan major', diatonic, [0,1,3,5,7,9,11,12]),
  new Scale('neopolitan minor', diatonic, [0,1,3,5,7,8,10,12]),
  new Scale('nine tone scale', diatonic, [0,2,3,4,6,7,8,9,11,12]),
  new Scale('octatonic (H-W)', diatonic, [0,1,3,4,6,7,9,10,12]),
  new Scale('octatonic (W-H)', diatonic, [0,2,3,5,6,8,9,11,12]),
  new Scale('oriental (a)', diatonic, [0,1,4,5,6,8,10,12]),
  new Scale('oriental (b)', diatonic, [0,1,4,5,6,9,10,12]),
  new Scale('overtone', diatonic, [0,2,4,6,7,9,10,12]),
  new Scale('pelog', diatonic, [0,1,3,7,8,12]),
  new Scale('pelog 2', diatonic, [0,1,3,7,10,12]),
  new Scale('pentatonic blues', diatonic, [0,3,5,6,7,10,12]),
  new Scale('pentatonic major', diatonic, [0,2,4,7,9,12]),
  new Scale('pentatonic minor', diatonic, [0,3,5,7,10,12]),
  new Scale('pentatonic neutral', diatonic, [0,2,5,7,10,12]),
  new Scale('persian', diatonic, [0,1,4,5,6,8,11,12]),
  new Scale('phrygian', diatonic, [0,1,3,5,7,8,10,12]),
  new Scale('phrygian major', diatonic, [0,1,4,5,7,8,10,12]),
  new Scale('prometheus', diatonic, [0,2,4,6,9,10,12]),
  new Scale('prometheus neopolitan', diatonic, [0,1,4,6,9,10,12]),
  new Scale('romanian minor', diatonic, [0,2,3,6,7,9,10,12]),
  new Scale('six tone symmetrical', diatonic, [0,1,4,5,8,9,12]),
  new Scale('spanish gypsy', diatonic, [0,1,4,5,7,8,10,12]),
  new Scale('super locrian', diatonic, [0,1,3,4,6,8,10,12]),

  new Scale('ukranian dorian', diatonic, [0,2,3,6,7,9,10,12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale('ultralocrian', diatonic, [0,1,3,4,6,8,9,12]),

  new Scale('whole tone', diatonic, [0,2,4,6,8,10,12])
  // auxiliary augment AKA Lydian auxiliary augmented AKA whole tone
];
