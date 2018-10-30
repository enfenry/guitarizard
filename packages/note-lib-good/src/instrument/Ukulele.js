const diatonic = require('../data/scaleSystem/diatonic');
const FretBoard = require('./FretBoard');
const TunedString = require('./TunedString');

module.exports = class Ukulele {
  constructor(fretCount, tuning) {
    this.name = 'ukulele';

    const tunedStrings = [
      new TunedString('G-1', tuning[0], 'nylon', 0.11),
      new TunedString('C-2', tuning[1], 'nylon', 0.13),
      new TunedString('E-3', tuning[2], 'nylon', 0.17),
      new TunedString('A-4', tuning[3], 'nylon', 0.26),
    ];

    const stringConfig = [
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } }
    ];

    this.fretBoard = new FretBoard(diatonic, tunedStrings, stringConfig)
  }
}
