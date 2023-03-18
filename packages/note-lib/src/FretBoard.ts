import type { Temperament } from "./Temperament";
import type { TunedString } from "./TunedString";
import { Course } from "./Course";
import { Note } from "./Note";
import type { Scale } from "./Scale";
import { StringScale } from "./StringScale";
import { IStringConfig } from "./IStringConfig";
import { NotePitch } from "./enums/NotePitch";


export class FretBoard {
  temperament: Temperament;
  courses: Course[];
  stringConfig: IStringConfig[];
  /**
   * A FretBoard that holds strings.
   *
   * @param temperament : what temperament do the
   *   frets on this bord conform to?
   *
   * @param courses : Course[] - TunedString[] that represents 
   * either a single string or series of strings typically tuned to the same note 
   * e.g. Mandolin or 12-string guitar have pairs of TunedStrings in their courses, 
   * some instruments have triplets or varied courses)
   * 
   * (TunedString[]): left to right
   *   order---imagine a guitar hanging on the wall: The
   *   "A" string would be second from the left, and the
   *   high "e" string would be wayyyy on the right, or in
   *   this example, the last element in the array.
   *
   * @param stringConfig (Array<{ fret: { start,  end } }>):
   *   Defines the position of the strings on the FretBoard
   *   with the string's starting position, and tohe
   */
  constructor(
    temperament: Temperament,
    courses: Course[],
    stringConfig: IStringConfig[]
  ) {
    this.temperament = temperament;
    this.courses = courses;
    this.stringConfig = stringConfig;
  }

  /**
   * calculate fretCount as the longest given bound
   */
  getFretCount() {
    return this.stringConfig.reduce((max, config) => {
      return config.fret.end > max ? config.fret.end : max;
    }, 0);
  }

  /**
   * Set a single string's tuning on this fretboard
   */
  setCourseTuningNote(courseId: string, tuningNote: Note) {
    this.courses = this.courses.map(course => {
      if (course.id === courseId) {
        course.tunedStrings.forEach(tunedString => {
          tunedString.setTuningNote(tuningNote);
        });
      }
    return course;
    })

    // this.tunedStrings = this.tunedStrings.map((tunedString) => {
    //   if (tunedString.id === tunedStringID) {
    //     tunedString.setTuningNote(tuningNote);
    //   }

    //   return tunedString;
    // });
  }

  /**
   *
   */
  getNotes() {
    // return this.tunedStrings.map((tunedString, i) => {
    //   const config = this.stringConfig[i];

    //   const fret = config.fret;
    //   const fretSpan = fret.end - fret.start;

    //   const notesOnString = tunedString.getFrettedNotes(
    //     this.temperament,
    //     fretSpan
    //   );

    //   const notes = notesOnString.map((note, offset) => ({
    //     fretNumber: fret.start + offset,
    //     value: note,
    //   }));

    //   return { tunedString, config, notes };
    // });

    let allNotes = [];
    this.courses.map((course, i) => {
      const config = this.stringConfig[i];

      const fret = config.fret;
      const fretSpan = fret.end - fret.start;
      course.tunedStrings.forEach(tunedString => {
      const notesOnString = tunedString.getFrettedNotes(
        this.temperament,
        fretSpan
      );

      const notes = notesOnString.map((note, offset) => ({
        fretNumber: fret.start + offset,
        value: note,
      }));

      allNotes.push({ tunedString, config, notes });
      });
    });
    return allNotes;
  }

  // same result as `getNotes`, but the notes are filtered
  // out according to the scale given. EG. A chromatic
  // scale will always equal the output of `getNotes`
  getNotesInScale(scale: Scale, keyNote: Note): StringScale[] {
    const keyNotes = scale.getNotesInKey(keyNote);

    return this.getNotes().map((string) => {
      // filter out any notes that don't exist
      // in the `keyNotes` array
      const fretNotes = string.notes.filter((fretNote) => {
        return !!keyNotes.find((keyNote) => fretNote.value.isSimilar(keyNote));
      });

      // "tune" the notes to the given keyNote. currently
      // super dumb... makes the notes "sharp" if the
      // key note is sharp lol.
      const tunedFretNotes = fretNotes.map((fretNote) => {
        if (keyNote.pitch === NotePitch.Sharp) {
          const sharpNote = fretNote.value.findSharp();

          if (sharpNote) {
            fretNote.value = sharpNote;
          }
        }

        return fretNote;
      });

      return {
        tunedString: string.tunedString,
        config: string.config,
        notes: tunedFretNotes,
      };
    });
  }

  toJSON() {
    return {
      temperament: this.temperament,
      courses: this.courses,
      stringConfig: this.stringConfig,
    };
  }

  valueOf() {
    return JSON.stringify(this);
  }

  toString() {
    return JSON.stringify(this);
  }
}
