import { Key, Note, Scale, instrument } from "guitarizard-note-lib";
import { Base16Theme } from "../lib/colors";
import FretBoard from "./FretBoard";

interface Props {
    banjo: instrument.Banjo;
    keyNote: Note;
    scale: Scale;
    onTune: (stringID: string, newTuning: Note) => void;
    theme: Base16Theme;
    activeKey: Key;
}

export default function Banjo(props: Props) {
    return <FretBoard
               fretBoard={props.banjo.fretBoard}
               scale={props.scale}
               keyNote={props.keyNote}
               showFretBar={true}
               onTune={props.onTune}
               activeKey={props.activeKey}
               theme={props.theme} />
}
