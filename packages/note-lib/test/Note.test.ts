import tap from "tap";
import { NotePitch } from "../src/enums/NotePitch";
import { Note } from "../src/Note";

tap.test("class Note", function (t) {
  const Xs = new Note("X#", NotePitch.Sharp);
  const Yb = new Note("Yb", NotePitch.Flat);

  const note = new Note("FOO-BAR", NotePitch.Sharp, [Xs, Yb]);

  const X = new Note("X", NotePitch.Flat);

  t.equal(note.id, "FOO-BAR", "note id should match");

  t.same(note.aliasNotes, [Xs, Yb], "aliases should match");

  t.same(
    note.toJSON(),
    {
      id: "FOO-BAR",
      aliasNotes: [
        { id: "X#", attributes: NotePitch.Sharp },
        { id: "Yb", attributes: NotePitch.Flat },
      ],
      attributes: {},
    },
    "JSON should be correct"
  );

  t.equal(note.valueOf(), JSON.stringify(note));
  t.equal(note.toString(), JSON.stringify(note));

  t.equal(note.isSimilar(Xs), true, "detect similar notes");
  t.equal(note.isSimilar(note), true, "detect similar (self)");
  t.equal(note.isSimilar(new Note("Z", NotePitch.Neither)), false, "dismiss non-similar notes");

  t.equal(note.findSharp(), Xs, "find sharp note in aliases");
  t.equal(Xs.findSharp(), Xs, "return self if sharp");
  t.equal(Yb.findSharp(), void 0, "return undefined if no sharp exists");

  t.equal(note.findFlat(), Yb, "find flat note in aliases");
  t.equal(Yb.findFlat(), Yb, "return self if flat");
  t.equal(Xs.findFlat(), void 0, "return undefined if no flat exists");

  t.equal(
    note.findSharpOrNatural(),
    Xs,
    "find sharp or natural note in aliases"
  );
  t.equal(note.findFlatOrNatural(), Yb, "find flat or natural note in aliases");
  t.equal(X.findSharpOrNatural(), X, "return natural note if no flat exists");
  t.equal(X.findFlatOrNatural(), X, "return natural note if no flat exists");

  t.equal(
    note.findByPitch(NotePitch.Sharp),
    Xs,
    "find by attribute, success"
  );

  t.equal(
    Xs.findByPitch(NotePitch.Sharp),
    Xs,
    "find by attribute, success (self)"
  );

  t.end();
});
