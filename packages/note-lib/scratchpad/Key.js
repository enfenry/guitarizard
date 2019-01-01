const Scale = require('../src/Scale');
const diatonic = require('../src/data/scaleSystem/diatonic');
const Scales = require('../src/data/scales');
const { mainIntervals } = require('../src/data/intervals');
const util = require('./util.js');


module.exports = class Key {
    constructor(note, scale) {
        this.note = note;
        this.scale = scale;
    }

    // Given a key's note and scale, return equivalent keys if you were to transpose into other notes & scales
    // e.g. the B Lydian scale is exactly the same as the Bb neapolitan minor or Db mixolydian, just with a different note as the 'key' or root.
    getEquivKeys() {
        let equivKeys = [];
        let noteOffsetInput = this.getNoteOffset(this.note);
        let scaleArrayInput = this.getScaleArray(this.scale.name);
        // Remove last semitone, which should be the duplicate '12' note.
        scaleArrayInput.pop();

        for (let h = 0; h < diatonic.notes.length; h++) {
            let noteOffset = this.getNoteOffset(diatonic.notes[h].id);
            let delta = (noteOffset - noteOffsetInput + 12) % 12;
            for (let i = 0; i < Scales.length; i++) {
                let scaleArray = this.getScaleArray(Scales[i].name);
                for (let j = 0; j < scaleArray.length; j++) {
                    scaleArray[j] = (scaleArray[j] + delta) % 12;
                }

                // Remove last semitone, which should be some offset of the duplicate '12' note.
                scaleArray.pop();
                util.sortArray(scaleArray);
                if (util.isEqualArray1D(scaleArrayInput, scaleArray)) {
                    let key = {
                        note: diatonic.notes[h].id,
                        scale: Scales[i]
                    }
                    equivKeys.push(key);
                }
            }
        }
        return equivKeys;
    }



    // Given a scale's name, return its simplified array in terms of semitones
    getScaleArray(scaleName) {
        for (let i = 0; i < Scales.length; i++) {
            let scaleArray = [];
            if (scaleName === Scales[i].name) {
                for (let j = 0; j < Scales[i].intervals.length; j++) {
                    scaleArray.push(Scales[i].intervals[j].semitones);
                }
                return scaleArray;
            }
        }
    }


    // Given note, return offset from sequence of notes starting with A.
    getNoteOffset(note) {
        for (let i = 0; i < diatonic.notes.length; i++) {
            if (note === diatonic.notes[i].id) {
                return i;
            }
        }
    }
}
// -- END of MODULE


// -- TESTING
const Key = require('./Key.js');

let testKey = new Key('B',new Scale('lydian',diatonic,[0,2,4,6,7,9,11,12]))

let aeolianArray = testKey.getScaleArray('aeolian');
// console.log(aeolianArray);

let noteOffset = testKey.getNoteOffset('B');
// console.log(noteOffset);

let equivKeys = testKey.getEquivKeys();
for (let i = 0; i < equivKeys.length; i++) {
    console.log(equivKeys[i].note, equivKeys[i].scale.name);
}
// console.log(equivKeys);