import "./FretSegment.css";
import { Key, Note } from "note-lib";
import { Base16Theme, rainbow } from "../colors/themes";
import { CSSProperties } from "react";
import { ScaleOnCourse } from "note-lib/src/ScaleOnCourse";

interface IFretSegmentProps {
  scaleOnCourse: ScaleOnCourse;
  fret: number;
  theme: Base16Theme;
  isRainbowMode: boolean;
  activeKey: Key;
  style?: CSSProperties;
}

const getNoteTextStyle = (
  isRainbowMode: boolean,
  theme: Base16Theme,
  note: Note | undefined,
  activeKey: Key
) => {
  let noteTextStyle: CSSProperties = {
    backgroundColor: theme.base00,
    color: theme.base05,
  };

  if (isRainbowMode && note) {
    let notes = activeKey.scale.getNotesInKey(activeKey.note);

    let semitones = activeKey.scale.intervals.map(
      (interval) => interval.semitones
    );

    let semitoneColors = semitones.map((semitone) => rainbow[semitone]);

    let noteIntervalColorCombos = notes.map((n, i) => ({
      note: n,
      semitone: semitones[i],
      semitoneColor: semitoneColors[i],
    }));

    const thisNoteIntervalColorCombo = noteIntervalColorCombos.find(
      (noteIntervalColorCombo) => noteIntervalColorCombo.note.isSimilar(note)
    );

    if (thisNoteIntervalColorCombo) {
      noteTextStyle = {
        ...noteTextStyle,
        color: thisNoteIntervalColorCombo.semitoneColor,
      };
    }
  }
  return noteTextStyle;
};

const FretSegment = (props: IFretSegmentProps) => {
  const { fret, isRainbowMode, scaleOnCourse, theme, activeKey } = props;

  // Get the note on this string (if it exists)
  const noteFretNumberPair = scaleOnCourse.notes.find((note) => {
    return note.fretNumber === fret;
  });

  const note = noteFretNumberPair ? noteFretNumberPair.value : undefined;

  const noteDisplay = note ? note.id : "";

  const fretLineStyle = { backgroundColor: theme.base07 };

  const stringLineStyle = { backgroundColor: theme.base0E };

  const noteTextStyle = getNoteTextStyle(isRainbowMode, theme, note, activeKey);

  const backgroundStyle =
    fret <= scaleOnCourse.config.fret.start
      ? {
          backgroundColor: theme.base01,
        }
      : {};

  return (
    <div className="fret-segment">
      <div className="background" style={backgroundStyle}></div>
      <div className="inner">
        <div className="string-line" style={stringLineStyle}></div>
        {note && (
          <div className="note-container">
            <div className="note-text" style={noteTextStyle}>
              {noteDisplay}
            </div>
          </div>
        )}
        <div className="fret-line" style={fretLineStyle}></div>
      </div>
    </div>
  );
}

export { FretSegment };
