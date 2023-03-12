import { FretBoard } from "./FretBoard";
import { diatonic } from "../data/scaleSystem/diatonic";
import { TunedString } from "./TunedString";
import { Tunings } from "../data/tunings";
import type { Note } from "../Note";

export class Guitar {
  name: string;
  fretBoard: FretBoard;

  constructor(fretCount: number, tuning: Note[]) {
    this.name = "guitar";

    // left to right on the guitar
    const tunedStrings = [
      new TunedString("E-string", tuning[0], "metal", 1.1684),
      new TunedString("B-string", tuning[1], "metal", 0.9144),
      new TunedString("G-string", tuning[2], "metal", 0.6604),
      new TunedString("D-string", tuning[3], "metal", 0.4318),
      new TunedString("A-string", tuning[4], "metal", 0.3302),
      new TunedString("high-e-string", tuning[5], "metal", 0.254),
    ];

    const stringConfig = [
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
      { fret: { start: 0, end: fretCount } },
    ];

    this.fretBoard = new FretBoard(diatonic, tunedStrings, stringConfig);
  }

  // getCommonTunings() {
  //   let commonTunings = [];
  //   for (let i = 0; i < Tunings.length; i++) {
  //     if (Tunings[i].instrument === this.name) {
  //       commonTunings.push(Tunings[i]);
  //     }
  //   }
  //   return commonTunings;
  // }

  // getStandardTuning() {
  //   return this.getCommonTunings()[0];
  // }
}
