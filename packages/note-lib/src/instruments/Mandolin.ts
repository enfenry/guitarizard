import { FretBoard } from "../FretBoard";
import { twelveTET } from "../data/temperaments/twelveTET";
import { TunedString } from "../TunedString";
import { Course } from "../Course";
import type { Note } from "../Note";
import { FrettedInstrument } from "./FrettedInstrument";

// TODO: Implement support for "Courses" or "double stringed" instruments (e.g. 12-string guitar, Bouzouki, https://en.wikipedia.org/wiki/Lute, etc.)
// For now, representing Mandolin without doubled strings.
// https://en.wikipedia.org/wiki/Mandolin
// https://en.wikipedia.org/wiki/Course_(music)

export class Mandolin extends FrettedInstrument{
  name: string;
  fretBoard: FretBoard;
  constructor(fretCount: number, tuning: Note[]) {
    super();
    this.name = "mandolin";

    const course1 = new Course("G-strings",[
      new TunedString("G-string-1", tuning[0], "metal", 4),
      new TunedString("G-string-2", tuning[0], "metal", 4),
  ]);
    const course2 = new Course("D-strings",[
      new TunedString("D-string-1", tuning[1], "metal", 3),
      new TunedString("D-string-2", tuning[1], "metal", 3),
  ]);
    const course3 = new Course("A-strings",[
      new TunedString("A-string-1", tuning[2], "metal", 2),
      new TunedString("A-string-2", tuning[2], "metal", 2),
    ]);
    const course4 = new Course("E-strings",[
      new TunedString("E-string-1", tuning[3], "metal", 1),
      new TunedString("E-string-2", tuning[3], "metal", 1),
    ]);


    const courses: Course[] = [
      course1,
      course2,
      course3,
      course4
    ];

    const stringConfig = this.getDefaultStringConfig(fretCount, tuning);

    this.fretBoard = new FretBoard(twelveTET, courses, stringConfig);
  }
}
