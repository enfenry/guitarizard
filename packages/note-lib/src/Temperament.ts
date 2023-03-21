import { Note } from "./Note";
import type { NoteID } from "./Note";

/**
 * A temperament is a musical system of defining intervals/notes... it's hard to explain.
 * https://en.wikipedia.org/wiki/Musical_temperament
 * https://en.wikipedia.org/wiki/Equal_temperament
 *
 * e.g. twelve-tone equal temperament, the most common in western music, divides an octave into 12 intervals.
 *
 * If you were a formal person, you'd call this a "scale".
 */
export class Temperament {
  name: string;
  notes: Note[];

  constructor(name: string, notes: Note[]) {
    this.name = name;
    this.notes = notes;
  }

  // Given an ID, e.g. "A#", return the "Note" instance
  // from this temperament.
  getNoteFromID(noteID: NoteID): Note {
    for (let i = 0; i < this.notes.length; i++) {
      const note = this.notes[i];

      // easy -- found it right away
      if (note.id === noteID) {
        return note;
      }

      // else, check aliases for this note
      const aliasNote = note.aliasNotes.find(
        (aliasNote) => aliasNote.id === noteID
      );

      // return the note as it exists in the temperament
      // order and NOT the alias note. The note will
      // contain the alias should the consumer need it.
      if (typeof aliasNote !== "undefined") {
        return note;
      }
    }

    throw `The given noteID: ${noteID} is NOT valid in this temperament`;
  }

  /**
   * Gets all notes for this temperament that can be used
   * as keys. Basically takes all availables notes, and
   * their aliases, and smushes them together.
   */
  getKeyNotes() {
    return this.notes.reduce((acc: Note[], note: Note) => {
      acc = acc.concat(note.aliasNotes);
      acc = acc.concat([note]);
      return acc;
    }, []);
  }

  /**
   * Our temperament defines an "order" that starts at
   * a given note. This function effectivly "shifts" the
   * notes so that the temperament starts at a different
   * note.
   *
   * This function
   */
  getShiftedNotes(fromNote: Note) {
    // Get the representation of this note as it appears in this system.
    const internalNote = this.getNoteFromID(fromNote.id);

    if (!internalNote) {
      throw `fromNote '${fromNote.id}' does not exist in temperament`;
    }

    let notes = [];
    let currentNote = internalNote;

    for (let i = 0; i < this.notes.length; i++) {
      notes.push(currentNote);
      currentNote = this.getNextNote(currentNote);
    }

    return notes;
  }

  /**
   * Internal function.
   *
   * Given a Note (object), it will return the
   * offset in the context of this temperament.
   *
   * i.e. the relative offset to THIS temperament
   *
   */
  _getRelativeNoteOffset(fromNote: Note) {
    // We have a list of notes in this "temperament" (this.notes)
    // and we want the offset that `fromNote` exists in it.
    //
    // `findIndex` loops over `this.notes`.
    //
    // If we return `true` from any iterations, then we have
    // found the note we were looking for!

    const offset = this.notes.findIndex((note) => {
      // "Sorry for replacing the following line! This solution didn't work properly if fromNote was a sharpNote" -- Nolan
      //   return note.id === fromNote.id;
      return note.id === this.getNoteFromID(fromNote.id).id;
    });

    return offset;
  }

  getNoteInterval(fromNote: Note, toNote: Note) {
    const fromNoteOffset = this._getRelativeNoteOffset(fromNote);
    const toNoteOffset = this._getRelativeNoteOffset(toNote);

    if (toNoteOffset > fromNoteOffset) {
      return toNoteOffset - fromNoteOffset;
    } else {
      return toNoteOffset - fromNoteOffset + this.notes.length;
    }
  }

  /**
   * Note -> Note
   *
   * Returns the next note in the temperament
   * given a starting note `fromNote`.
   *
   * An optional parameter `stepsAway` allows you
   * specify how steps to travel (default=1)
   *
   * e.g.
   *
   *  > if our system is 12EDO(12TET), then
   *  >
   *  > Given Note('B'), this will return Note('C')
   *
   * It will also properly "loop" around if
   * necessary,
   *
   * e.g.
   *
   *  > if our system is 12EDO(12TET), then
   *  >
   *  > Given Note('Ab'), this will return Note('A')
   *
   */
  getNextNote(fromNote: Note, stepsAway?: number) {
    if (typeof stepsAway === "undefined") {
      stepsAway = 1;
    }

    const offset = this._getRelativeNoteOffset(fromNote);

    let index = (offset + stepsAway) % this.notes.length;

    if (index < 0) {
      index = this.notes.length + index;
    }

    return this.notes[index];
  }

  toJSON() {
    return {
      name: this.name,
      notes: this.notes,
    };
  }

  valueOf() {
    return JSON.stringify(this);
  }

  toString() {
    return JSON.stringify(this);
  }
}
