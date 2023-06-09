import { Scale } from "../Scale";
import { twelveTET } from "./temperaments/twelveTET";

const scales = [
  new Scale("aeolian", twelveTET, [0, 2, 3, 5, 7, 8, 10, 12]),
  // aeolian AKA natural minor AKA ethiopian Geez AKA ethiopian Ezel AKA melodic minor descending AKA natural (pure) minor

  new Scale("aeolian dominant", twelveTET, [0, 2, 4, 5, 7, 8, 10, 12]),
  // hindu scale AKA Aeolian Dominant AKA Mixolydian b6 (or b13)

  new Scale("algerian (1st octave)", twelveTET, [0, 2, 3, 6, 7, 8, 11, 12]),
  // Hungarian gypsy AKA Hungarian minor AKA double harmonic minor scale AKA Gypsy minor AKA algerian (1st octave)

  new Scale("algerian (2nd octave)", twelveTET, [0, 2, 3, 5, 7, 8, 11, 12]),
  // mohammedan AKA harmonic minor AKA algerian (2nd octave)
  // algerian scale is super funky - changes based on octave, maybe not technically twelveTET

  new Scale("altered", twelveTET, [0, 1, 3, 4, 6, 8, 10, 12]),
  // altered scale AKA super Locrian AKA Locrian b4

  new Scale("altered dorian", twelveTET, [0, 2, 3, 6, 7, 9, 10, 12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale("altered phrygian", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  // new Scale('arabian (a)', twelveTET, [0,2,3,5,6,8,9,11,12]),
  // arabian (a) wasn't found

  new Scale("arabian", twelveTET, [0, 2, 4, 5, 6, 8, 10, 12]),
  // arabian AKA arabian (b) AKA major locrian

  new Scale("augmented", twelveTET, [0, 3, 4, 7, 8, 11, 12]),

  new Scale("auxiliary augmented", twelveTET, [0, 2, 4, 6, 8, 10, 12]),
  // auxiliary augmented AKA Lydian auxiliary augmented AKA whole tone

  new Scale("auxiliary diminished", twelveTET, [0, 2, 3, 5, 6, 8, 9, 11, 12]),
  // auxiliary diminished AKA diminished AKA diminished minor AKA diminished (whole/half) AKA octatonic (whole/half)

  new Scale("auxiliary diminished blues", twelveTET, [
    0,
    1,
    3,
    4,
    6,
    7,
    9,
    10,
    12,
  ]),

  new Scale("balinese", twelveTET, [0, 1, 3, 7, 8, 12]),

  new Scale("bayati maqam", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("bebop dominant", twelveTET, [0, 2, 4, 5, 7, 9, 10, 11, 12]),

  new Scale("bebop dorian", twelveTET, [0, 2, 3, 4, 5, 7, 9, 10, 12]),
  // bebop Dorian AKA bebop minor

  new Scale("bebop dorian 2", twelveTET, [0, 2, 3, 5, 7, 9, 10, 11, 12]),
  // bebop Dorian second or alternate form AKA bebop minor 2

  new Scale("bebop half diminished", twelveTET, [0, 1, 3, 5, 6, 7, 8, 11, 12]),
  // bebop half diminished AKA Phrygiolocrian MAYBE??

  new Scale("bebop major", twelveTET, [0, 2, 4, 5, 7, 8, 9, 11, 12]),

  new Scale("bebop minor", twelveTET, [0, 2, 3, 4, 5, 7, 9, 10, 12]),
  // bebop minor AKA bebop Dorian

  new Scale("bebop minor 2", twelveTET, [0, 2, 3, 5, 7, 9, 10, 11, 12]),
  // bebop minor 2 AKA bebop Dorian second or alternate form

  new Scale("bhairav raga", twelveTET, [0, 1, 4, 5, 7, 8, 11, 12]),
  // Bhairav raga AKA byzantine AKA double harmonic major AKA double harmonic

  new Scale("blues", twelveTET, [0, 3, 5, 6, 7, 10, 12]),
  // blues AKA pentatonic blues

  new Scale("blues variation 1", twelveTET, [0, 3, 5, 6, 7, 10, 11, 12]),
  new Scale("blues variation 2", twelveTET, [0, 3, 4, 5, 6, 7, 10, 11, 12]),
  new Scale("blues variation 3", twelveTET, [0, 3, 4, 5, 6, 7, 9, 10, 11, 12]),

  new Scale("byzantine", twelveTET, [0, 1, 4, 5, 7, 8, 11, 12]),
  // byzantine AKA double harmonic major AKA Bhairav raga AKA double harmonic

  new Scale("chinese", twelveTET, [0, 4, 6, 7, 11, 12]),
  new Scale("chinese 2", twelveTET, [0, 2, 5, 7, 9, 12]),

  new Scale("chinese mongolian", twelveTET, [0, 2, 4, 7, 9, 12]),
  // chinese mongolian AKA mongolian AKA twelveTET AKA pentatonic major

  new Scale("chromatic", twelveTET, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  new Scale("dastgāh-e homāyoun", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("twelveTET", twelveTET, [0, 2, 4, 7, 9, 12]),
  // twelveTET AKA chinese mongolian AKA mongolian AKA pentatonic major

  new Scale("diminished", twelveTET, [0, 2, 3, 5, 6, 8, 9, 11, 12]),
  // auxiliary diminished AKA diminished AKA diminished minor AKA diminished (whole/half) AKA octatonic (whole/half)

  new Scale("diminished minor", twelveTET, [0, 2, 3, 5, 6, 8, 9, 11, 12]),
  // auxiliary diminished AKA diminished AKA diminished minor AKA diminished (whole/half) AKA octatonic (whole/half)

  // new Scale('diminished sevenths', twelveTET, [0,3,6,9,12]),
  // diminished sevenths scale not found

  new Scale("diminished (H-W)", twelveTET, [0, 1, 3, 4, 6, 7, 9, 10, 12]),
  // diminished half/whole AKA diminished half AKA octatonic (half/whole)

  new Scale("diminished (W-H)", twelveTET, [0, 2, 3, 5, 6, 8, 9, 11, 12]),
  // auxiliary diminished AKA diminished AKA diminished minor AKA diminished (whole/half) AKA octatonic (whole/half)

  new Scale("dominant b2 b6", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("dominant pentatonic", twelveTET, [0, 2, 4, 7, 10, 12]),

  new Scale("dorian", twelveTET, [0, 2, 3, 5, 7, 9, 10, 12]),

  new Scale("dorian #4", twelveTET, [0, 2, 3, 6, 7, 9, 10, 12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale("double harmonic major", twelveTET, [0, 1, 4, 5, 7, 8, 11, 12]),
  // double Harmonic AKA byzantine AKA Bhairav raga AKA double harmonic

  new Scale("double harmonic minor", twelveTET, [0, 2, 3, 6, 7, 8, 11, 12]),
  // Hungarian gypsy AKA Hungarian minor AKA double harmonic minor scale AKA Gypsy minor AKA algerian (1st octave)

  new Scale("egyptian", twelveTET, [0, 2, 5, 7, 10, 12]),
  new Scale("8 tone spanish", twelveTET, [0, 1, 3, 4, 5, 6, 8, 10, 12]),
  new Scale("enigmatic", twelveTET, [0, 1, 4, 6, 8, 10, 11, 12]),

  new Scale("ethiopian (a raray)", twelveTET, [0, 2, 4, 5, 7, 9, 11, 12]),
  // ethiopian (a raray) AKA ethiopian araray AKA major scale AKA ionian

  new Scale("ethiopian (ezel)", twelveTET, [0, 2, 3, 5, 7, 8, 10, 12]),
  // natural minor AKA aeolian AKA ethiopian Geez AKA ethiopian Ezel AKA melodic minor descending AKA natural (pure) minor

  new Scale("ethiopian (geez)", twelveTET, [0, 2, 3, 5, 7, 8, 10, 12]),
  // natural minor AKA aeolian AKA ethiopian Geez AKA ethiopian Ezel AKA melodic minor descending AKA natural (pure) minor

  new Scale("freygish", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("gypsy minor", twelveTET, [0, 2, 3, 6, 7, 8, 11, 12]),
  // Hungarian gypsy AKA Hungarian minor AKA double harmonic minor scale AKA Gypsy minor AKA algerian (1st octave)

  new Scale("half diminished", twelveTET, [0, 2, 3, 5, 6, 8, 10, 12]),
  // half diminished AKA locrian #2 AKA maybe half diminished #2

  new Scale("harmonic minor", twelveTET, [0, 2, 3, 5, 7, 8, 11, 12]),
  // harmonic minor AKA mohammedan AKA algerian (2nd octave)

  new Scale("hawaiian", twelveTET, [0, 2, 3, 5, 7, 9, 11, 12]),

  new Scale("hijaz-nahawand", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("hindu", twelveTET, [0, 2, 4, 5, 7, 8, 10, 12]),
  // hindu scale AKA Aeolian Dominant AKA Mixolydian b6 (or b13)

  new Scale("hirajōshi", twelveTET, [0, 4, 5, 9, 11, 12]),
  // hirajōshi AKA hira-choshi
  new Scale("hirajōshi 2", twelveTET, [0, 2, 3, 7, 8, 12]),
  // hirajōshi AKA hira-choshi

  new Scale("hungarian gypsy", twelveTET, [0, 2, 3, 6, 7, 8, 11, 12]),
  // Hungarian gypsy AKA Hungarian minor AKA double harmonic minor scale AKA Gypsy minor AKA algerian (1st octave)

  // new Scale('hungarian gypsy persian', twelveTET, [0,1,4,5,7,8,11,12]),
  // hungarian gypsy persian scale not found

  new Scale("hungarian major", twelveTET, [0, 3, 4, 6, 7, 9, 10, 12]),

  new Scale("hungarian minor", twelveTET, [0, 2, 3, 6, 7, 8, 11, 12]),
  // Hungarian gypsy AKA Hungarian minor AKA double harmonic minor scale AKA Gypsy minor AKA algerian (1st octave)

  new Scale("ionian", twelveTET, [0, 2, 4, 5, 7, 9, 11, 12]),
  // ethiopian (a raray) AKA ethiopian araray AKA major scale AKA ionian

  new Scale("ionian #5", twelveTET, [0, 2, 4, 5, 8, 9, 11, 12]),
  new Scale("iwato", twelveTET, [0, 1, 5, 6, 10, 12]),

  new Scale("japanese", twelveTET, [0, 1, 5, 7, 8, 12]),
  // japanese (a) AKA maybe kumoi 2

  new Scale("japanese 2", twelveTET, [0, 2, 5, 7, 8, 12]),
  // japanese 2 AKA maybe japanese (b)

  new Scale("japanese (ichikosucho)", twelveTET, [0, 2, 4, 5, 6, 7, 9, 11, 12]),
  new Scale("japanese (insen)", twelveTET, [0, 1, 5, 7, 10, 12]),
  new Scale("japanese (taishikicho)", twelveTET, [
    0,
    2,
    4,
    5,
    6,
    7,
    9,
    10,
    11,
    12,
  ]),
  new Scale("javanese", twelveTET, [0, 1, 3, 5, 7, 9, 10, 12]),
  new Scale("jewish (adonai malakh)", twelveTET, [0, 1, 2, 3, 5, 7, 9, 10, 12]),

  new Scale("jewish (ahava rabba)", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  // new Scale('jewish (magen abot)', twelveTET, [0,1,3,4,6,8,10,11,12]),
  // jewish magen avot not found consistently

  new Scale("kumoi", twelveTET, [0, 2, 3, 7, 9, 12]),

  new Scale("kumoi 2", twelveTET, [0, 1, 5, 7, 8, 12]),
  // japanese (a) AKA maybe kumoi 2

  new Scale("leading whole tone", twelveTET, [0, 2, 4, 6, 8, 10, 11, 12]),
  new Scale("locrian", twelveTET, [0, 1, 3, 5, 6, 8, 10, 12]),
  new Scale("locrian b4", twelveTET, [0, 1, 3, 4, 6, 8, 10, 12]),
  // altered scale AKA super Locrian AKA Locrian b4

  new Scale("locrian #2", twelveTET, [0, 2, 3, 5, 6, 8, 10, 12]),
  // half diminished AKA locrian #2 AKA maybe half diminished #2

  new Scale("locrian 6", twelveTET, [0, 1, 3, 5, 6, 9, 10, 12]),
  new Scale("lydian", twelveTET, [0, 2, 4, 6, 7, 9, 11, 12]),
  new Scale("lydian #2", twelveTET, [0, 3, 4, 6, 7, 9, 11, 12]),
  new Scale("lydian augmented", twelveTET, [0, 2, 4, 6, 8, 9, 11, 12]),

  new Scale("lydian auxiliary augmented", twelveTET, [0, 2, 4, 6, 8, 10, 12]),
  // auxiliary augmented AKA Lydian auxiliary augmented AKA whole tone

  new Scale("lydian b3", twelveTET, [0, 2, 3, 6, 7, 9, 11, 12]),
  // lydian diminshed AKA lydian b3

  new Scale("lydian diminished", twelveTET, [0, 2, 3, 6, 7, 9, 11, 12]),
  // lydian diminshed AKA lydian b3

  new Scale("lydian minor", twelveTET, [0, 2, 4, 6, 7, 8, 10, 12]),

  new Scale("major", twelveTET, [0, 2, 4, 5, 7, 9, 11, 12]),
  // ethiopian (a raray) AKA ethiopian araray AKA major scale AKA ionian

  new Scale("major arpeggio", twelveTET, [0, 4, 7, 12]),
  new Scale("major blues", twelveTET, [0, 2, 3, 4, 7, 9, 12]),
  new Scale("major locrian", twelveTET, [0, 2, 4, 5, 6, 8, 10, 12]),
  // major locrian AKA arabian (b)?

  // new Scale('melodic minor', twelveTET, [0,2,3,5,7,9,11,12]),
  // melodic minor AKA melodic minor (ascending)

  new Scale("melodic minor (ascending)", twelveTET, [0, 2, 3, 5, 7, 9, 11, 12]),
  // melodic minor AKA melodic minor (ascending)

  new Scale("melodic minor (descending)", twelveTET, [0, 2, 3, 5, 7, 8, 10, 12]),
  // melodic minor descending AKA natural minor AKA natural (pure) minor AKA aeolian AKA ethiopian Geez AKA ethiopian Ezel

  new Scale("minor arpeggio", twelveTET, [0, 3, 7, 12]),

  new Scale("mixo-blues", twelveTET, [0, 2, 3, 4, 5, 6, 7, 9, 10, 12]),
  // mixo-blues AKA mixolydian blues AKA  mixo-Dorian blues scale AKA mixolydian/blues hybrid

  new Scale("mixo-dorian blues", twelveTET, [0, 2, 3, 4, 5, 6, 7, 9, 10, 12]),
  // mixo-blues AKA mixolydian blues AKA  mixo-Dorian blues scale AKA mixolydian/blues hybrid

  new Scale("mixolydian", twelveTET, [0, 2, 4, 5, 7, 9, 10, 12]),

  new Scale("mixolydian blues", twelveTET, [0, 2, 3, 4, 5, 6, 7, 9, 10, 12]),
  // mixo-blues AKA mixolydian blues AKA  mixo-Dorian blues scale AKA mixolydian/blues hybrid

  new Scale("mixolydian b6", twelveTET, [0, 2, 4, 5, 7, 8, 10, 12]),
  // hindu scale AKA Aeolian Dominant AKA Mixolydian b6 (or b13)

  new Scale("mohammedan", twelveTET, [0, 2, 3, 5, 7, 8, 11, 12]),
  // mohammedan AKA harmonic minor AKA algerian (2nd octave)

  new Scale("mongolian", twelveTET, [0, 2, 4, 7, 9, 12]),
  // chinese mongolian AKA mongolian AKA twelveTET AKA pentatonic major

  new Scale("moorish phrygian", twelveTET, [0, 1, 3, 4, 5, 7, 8, 10, 11, 12]),
  // moorish phrygian AKA phrygian/double harmonic major mixed

  new Scale("natural minor", twelveTET, [0, 2, 3, 5, 7, 8, 10, 12]),
  // natural minor AKA melodic minor descending AKA natural (pure) minor AKA aeolian AKA ethiopian Geez AKA ethiopian Ezel

  // new Scale('neapolitan', twelveTET, [0,1,3,5,7,8,11,12]),
  // neapolitan scale in this form not found - only the major and minor versions

  new Scale("neapolitan major", twelveTET, [0, 1, 3, 5, 7, 9, 11, 12]),
  new Scale("neapolitan minor", twelveTET, [0, 1, 3, 5, 7, 8, 10, 12]),
  // neapolitan minor AKA phrygian

  new Scale("nine tone scale", twelveTET, [0, 2, 3, 4, 6, 7, 8, 9, 11, 12]),

  new Scale("octatonic (H-W)", twelveTET, [0, 1, 3, 4, 6, 7, 9, 10, 12]),
  // octatonic (half/whole) AKA diminished half/whole AKA diminished half

  new Scale("octatonic (W-H)", twelveTET, [0, 2, 3, 5, 6, 8, 9, 11, 12]),
  // auxiliary diminished AKA diminished AKA diminished minor AKA diminished (whole/half) AKA octatonic (whole/half)

  // new Scale('oriental (a)', twelveTET, [0,1,4,5,6,8,10,12]),
  // oriental (a) scale not found

  new Scale("oriental", twelveTET, [0, 1, 4, 5, 6, 9, 10, 12]),
  // oriental AKA maybe oriental (b)

  new Scale("overtone", twelveTET, [0, 2, 4, 6, 7, 9, 10, 12]),
  new Scale("pelog", twelveTET, [0, 1, 3, 7, 8, 12]),
  new Scale("pelog 2", twelveTET, [0, 1, 3, 7, 10, 12]),
  new Scale("pentatonic blues", twelveTET, [0, 3, 5, 6, 7, 10, 12]),

  new Scale("pentatonic major", twelveTET, [0, 2, 4, 7, 9, 12]),
  // chinese mongolian AKA mongolian AKA twelveTET AKA pentatonic major

  new Scale("pentatonic minor", twelveTET, [0, 3, 5, 7, 10, 12]),
  new Scale("pentatonic neutral", twelveTET, [0, 2, 5, 7, 10, 12]),
  new Scale("persian", twelveTET, [0, 1, 4, 5, 6, 8, 11, 12]),

  new Scale("phrygian", twelveTET, [0, 1, 3, 5, 7, 8, 10, 12]),
  // phrygian AKA neapolitan minor

  new Scale("phrygian dominant", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("phrygian major", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian major AKA phrygian dominant AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("prometheus", twelveTET, [0, 2, 4, 6, 9, 10, 12]),
  new Scale("prometheus neopolitan", twelveTET, [0, 1, 4, 6, 9, 10, 12]),

  new Scale("romanian minor", twelveTET, [0, 2, 3, 6, 7, 9, 10, 12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale("6 tone symmetrical", twelveTET, [0, 1, 4, 5, 8, 9, 12]),

  new Scale("spanish gypsy", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // Spanish Gypsy AKA phrygian major AKA phrygian dominant AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("spanish phrygian", twelveTET, [0, 1, 4, 5, 7, 8, 10, 12]),
  // phrygian dominant AKA phrygian major AKA jewish (ahava rabba) AKA Freygish AKA altered Phrygian AKA dominant b2 b6 AKA Spanish Phrygian AKA Spanish Gypsy AKA Hijaz-Nahawand AKA Bayati maqam AKA Dastgāh-e Homāyoun

  new Scale("super locrian", twelveTET, [0, 1, 3, 4, 6, 8, 10, 12]),
  // super Locrian AKA altered scale AKA Locrian b4

  new Scale("ukranian dorian", twelveTET, [0, 2, 3, 6, 7, 9, 10, 12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale("ukranian minor", twelveTET, [0, 2, 3, 6, 7, 9, 10, 12]),
  // ukranian dorian AKA ukranian minor AKA dorian #4 AKA Romanian minor AKA altered Dorian

  new Scale("ultra locrian", twelveTET, [0, 1, 3, 4, 6, 8, 9, 12]),

  new Scale("whole tone", twelveTET, [0, 2, 4, 6, 8, 10, 12]),
  // auxiliary augmented AKA Lydian auxiliary augmented AKA whole tone
];

export default scales;
