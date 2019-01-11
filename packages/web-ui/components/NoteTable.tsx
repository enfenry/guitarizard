import { Key } from "guitarizard-note-lib";
import { Base16Theme } from "../lib/colors";
import React from 'react';

interface Props {
  activeKey: Key;
  theme: Base16Theme;
}

export default function noteTable(props: Props) {
  const rowDiv = {
    display: 'flex',
    flexDirection: 'row'
  }

  const colDiv = {
    padding: '5px',
    textAlign: 'left',
    listStylePosition: 'inside',
  }

  const noteItem = {
    backgroundColor: props.theme.base00,
    color: props.theme.base05,
    borderStyle: 'solid',
    borderColor: props.theme.base01,
    borderWidth: '1px',
    padding: '2px 0px 2px 5px',
    width: '100px'
  }

  let notes = props.activeKey.scale.getNotesInKey(props.activeKey.note);

  return (<div id="noteTable" style={colDiv}>
    Notes included:
    <div id="noteRow" style={rowDiv}>
      <div className="noteItem" style={noteItem}> Flats:</div>
      {notes.map((note, i) =>
        <div key={`${i}:${Math.random()}`} className="noteItem" style={noteItem}> {note.findFlatOrNatural().id}</div>
      )}
    </div>

    <div id="noteRow" style={rowDiv}>
      <div className="noteItem" style={noteItem}> Sharps:</div>
      {notes.map((note, i) =>
        <div key={`${i}:${Math.random()}`} className="noteItem" style={noteItem}> {note.findSharpOrNatural().id}</div>
      )}
    </div>
    {/* blues.getNotesInKey(diatonic.Fs)[0].aliasNotes[0].id */}
  </div>);
}